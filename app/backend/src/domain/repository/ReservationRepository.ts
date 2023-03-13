import Reservation from "../entities/reservation";
import IReservationPersistence from "./IReservationPersistence";

export default class ReservationRepository {
  constructor(private IPersistence: IReservationPersistence <any>) { }

  public async register(reserve: Omit<Reservation, "id">): Promise<Reservation> {
    return await this.IPersistence.register(reserve)
  }
}