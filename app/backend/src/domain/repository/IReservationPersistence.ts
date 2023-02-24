export default interface IReservationPersistence<T> {
  register(reserve: T): Promise<T>
}