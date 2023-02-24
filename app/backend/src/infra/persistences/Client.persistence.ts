import Client from '../../domain/entities/client';
import IClientPersistence from '../../domain/repository/IClientPersistence';
import client from '../database/models/client';

export default class ClientAdapter implements IClientPersistence<any> {

  constructor(private _clientModel = client) {}

  public async register(entity: Client): Promise<any> {    
    const { name, email, phone } = entity;
    
    const emailISExist = await this._clientModel.findOne({ where: { email } })
    const phoneISExist = await this._clientModel.findOne({ where: { phone } })
  
    if (emailISExist) throw new Error("email já existe");
    if (phoneISExist) throw new Error("Esse numero já existe");
   

    await this._clientModel.create({ name, email, phone }); 
    
    const newUser: Pick<Client, "name" | "email"> = { name, email };
    return newUser;
  }
}
