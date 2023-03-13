import { NextFunction, Request, Response } from 'express';
import Reservation from '../../domain/entities/reservation';
import ReserverUseCase from '../../domain/usecase/reservation.usecase';

export default class ReserverController {

  constructor(private reserverUseCase: ReserverUseCase) {}

  public register = async (req: Request, res: Response, next: NextFunction) => {
    const reservation: Omit<Reservation, "id"> = {
      dateChecking: req.body.dateChecking,
      dateCheckout: req.body.dateCheckout,
      roomNumber: req.body.roomNumber,
      numberPeople: req.body.numberPeople,
      dailyRate: req.body.dailyRate,
      clientId: req.body.clientId
    }
    try {     
      const result = await this.reserverUseCase.register(reservation)
      return res.status(201).json(result);
    } catch (error) {
      next(error)
    }
  }
}

