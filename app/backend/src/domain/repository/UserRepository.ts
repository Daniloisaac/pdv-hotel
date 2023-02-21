import User from "../entities/User";
import IUserPersistence from "./IUserPersistence";

export default class UserRepository {
  constructor(private IPersistence: IUserPersistence <any>) { }

  public async register(entity: Omit<User, "id">): Promise<User> {
    return await this.IPersistence.register(entity)
  }
  
  public async login(entity: Pick<User, "email" | "password">): Promise<User> {
    return await this.IPersistence.login(entity)
  }
}