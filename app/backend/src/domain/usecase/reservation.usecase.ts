import Reservation from "../entities/reservation";
import ReservationRepository from "../repository/ReservationRepository";

export default class ReserverUseCase {
  constructor(private repository: ReservationRepository) {}  
  
  public async register(reservation: Omit<Reservation, "id">): Promise<Reservation> {
    const { 
      dateChecking: dateChecking,
      dateCheckout,
      roomNumber,
      numberPeople,
      dailyRate,
     } = reservation;

      if (!dateChecking || !dateCheckout || !roomNumber || !numberPeople || !dailyRate)
       throw new Error("Os campos não podem ser vazios");

      if (numberPeople > 5)  throw new Error("o numero de pessoas não pode ser maior que 5");
      
      

      return await this.repository.register(reservation)
    }
}