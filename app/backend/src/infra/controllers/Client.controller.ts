import { NextFunction, Request, Response } from 'express';
import Client from '../../domain/entities/client';
import ClientUseCase from '../../domain/usecase/Client.usecase';

export default class ClientController {

  constructor(private clientUseCase: ClientUseCase) {}

  public register = async (req: Request, res: Response, next: NextFunction) => {
    const user: Omit<Client, "id"> = {
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone
    }
    try {     
      const result = await this.clientUseCase.register(user)
      return res.status(201).json(result);
    } catch (error) {
      next(error)
    }
  }
}

