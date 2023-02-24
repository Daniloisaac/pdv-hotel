import Reservation from '../../domain/entities/reservation';
import IReservationPersistence from '../../domain/repository/IReservationPersistence';
import reservations from '../database/models/reservations';
import Client from '../database/models/client';
export default class ReserverAdapter implements IReservationPersistence<any> {

  constructor(private _reserverModel = reservations, private _clientModel = Client) {}

  public async register(reserver: Reservation): Promise<any> {    
    const { 
      roomNumber,
      numberPeople,
      dailyRate,
      clientId
     } = reserver;
    
    const roomISOccupied = await this._reserverModel.findOne({ where: { roomNumber } })
    const client = await this._clientModel.findOne({ where: { email: clientId } })
    console.log('client persistence', client)
    
    if (roomISOccupied) throw new Error("esse quarto está ocupado");  
    if (!client) throw new Error("Cliente não cadastrado");  

     const { id } = client;

    await this._reserverModel.create({ 
      clientId: id,
      dateChecking: new Date(),
      dateCheckout: new Date(),
      roomNumber,
      numberPeople,
      dailyRate,
     }); 
    
    const newUser: Pick<Reservation, "roomNumber" | "dailyRate" | "numberPeople"> = { 
      roomNumber,
      numberPeople,
      dailyRate,
     };
    return newUser;
  }
}
