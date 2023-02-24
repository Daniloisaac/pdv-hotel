export default class Reservation {
  id: string;
  clientId: string;
  dateChecking: string;
  dateCheckout: string;
  roomNumber: number;
  numberPeople: number;
  dailyRate: number;


  constructor() {
    this.id = '0';
    this.clientId = '0'
    this.dateChecking = '';
    this.dateCheckout = '';
    this.roomNumber = 0;
    this.numberPeople = 0;
    this.dailyRate = 0;

  }
}