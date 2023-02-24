import IReservationPersistence from '../../domain/repository/IReservationPersistence';
import ReservationRepository from '../../domain/repository/ReservationRepository';
import ReserverUseCase from '../../domain/usecase/reservation.usecase';
import ReserverController from '../controllers/Reservation.controller';
import ReserverAdapter from '../persistences/Reservation.persistence';

const persistence: IReservationPersistence<any> = new ReserverAdapter()
const reservationRepository = new ReservationRepository(persistence)
const reserverUseCase = new ReserverUseCase(reservationRepository)
const controller = new ReserverController(reserverUseCase)

export { controller }