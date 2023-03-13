import Client from "../entities/client";
import ClientRepository from "../repository/ClientRepository";

export default class ClientUseCase {
  constructor(private repository: ClientRepository) {}  
  
  public async register(client: Omit<Client, "id">): Promise<Client> {
    const { email, phone, name } = client;

      if (!name || !phone || !email) throw new Error("Os campos não podem ser vazios");
      
      if(email.length > 40) throw new Error("Email muito grande");

      if(name.length > 80) throw new Error("Name muito grande");

      if(phone.length !== 11) throw new Error("phone deve ter 11 digitos");

      return await this.repository.register(client)
    }
}