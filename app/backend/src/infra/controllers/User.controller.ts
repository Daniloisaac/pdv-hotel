import { NextFunction, Request, Response } from 'express';
import  User  from '../../domain/entities/User';
import UserCase from '../../domain/usecase/User.usecase';

class UserController {

  constructor(private userUseCase: UserCase) {}

  public register = async (req: Request, res: Response, next: NextFunction) => {
    const user: Omit<User, "id"> = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    }
    try {     
      const result = await this.userUseCase.register(user)
      return res.status(201).json(result);
    } catch (error) {
      next(error)
    }
  }

  public login = async (req: Request, res: Response, next: NextFunction) => {
    const user: Pick<User, "email" | "password"> = {
      email: req.body.email,
      password: req.body.password
    }

    try {
      const token = await this.userUseCase.login(user)
   console.log('token controller', token);
   if (token.messageError) {
    return res.status(400).send({message: token.messageError})
   }
      return res.cookie('access_token', token, {httpOnly: true}).status(201).json(user.email);
    } catch (error) {
      next(error)
    }
  }

  public logout = async (_req: Request, res: Response) => {
    res.clearCookie('access_token', {
      sameSite: 'none',
      secure: true,
    }).status(200).json('Deslogado...');
  }
}
export default UserController;
