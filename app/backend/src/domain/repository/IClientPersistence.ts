export default interface IClientPersistence<T> {
  register(client: T): Promise<T>
}