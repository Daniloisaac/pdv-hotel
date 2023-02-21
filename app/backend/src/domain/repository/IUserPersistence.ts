export default interface IUserPersistence<T> {
  register(entity: T): Promise<T>
  login(entity: T): T
}