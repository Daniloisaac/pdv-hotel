import Client from "../entities/client";
import IClientPersistence from "./IClientPersistence";

export default class ClientRepository {
  constructor(private IClient: IClientPersistence<any> ) {}

  public async register(client: Omit<Client, "id">): Promise<Client> {
    return await this.IClient.register(client)
  }
}