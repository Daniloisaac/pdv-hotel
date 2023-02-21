import User from '../../domain/entities/User';
import IUserPersistence from '../../domain/repository/IUserPersistence';
import Users from '../database/models/User';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

export default class UserAdapter implements IUserPersistence<any> {

  constructor(private _usersModel = Users) {}

  public async register(entity: User): Promise<any> {    
    const { name, email, password } = entity;
    
    const emailISExist = await this._usersModel.findOne({ where: { email } })
  
    if (emailISExist) throw new Error("email já existe");
   
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    await this._usersModel.create({ name, email, password: hash }); 
    
    const newUser: Pick<User, "name" | "email"> = { name, email };
    return newUser;
  }

  public async login(entity: Pick<User, "email" | "password">): Promise<any> {    
    const { email, password }  = entity;

    const user = await this._usersModel.findOne({ where: { email } }); 

    if (!user) throw new Error("Incorrect email or password");    

    const PasswordIsValid = bcrypt.compareSync(password, user.password);

    if (!PasswordIsValid) throw new Error("Incorrect password");

      const token = jwt
      .sign({id: user.id, email: user.email}, process
        .env.JWT_SECRET || '123', { expiresIn: '30d', algorithm: 'HS256' });

    return token 
  }
}
