// onde fazemos a validação e chamamos os repositorios

import User from "../entities/User";
import UserRepository from "../repository/UserRepository";

export default class UserCase {
  constructor(private repository: UserRepository) {}

  public async register(entity: Omit<User, "id">): Promise<User> {
    if(!entity.email || !entity.name || !entity.password)
      throw new Error("Os campos não podem ser vazios");
    
    if(entity.email.length > 40)
      throw new Error("Email muito grande");

    if(entity.name.length > 80)
      throw new Error("Name muito grande");

    if(entity.password.length < 5)
      throw new Error("Password deve ter mais que 5 caracteres");
    
    return await this.repository.register(entity)
  }

  public async login(entity: Pick<User, "email" | "password">): Promise<any> {
    if(!entity.email || !entity.password)
      return { messagemError: "Os campos não podem ser vazios" };
    
    return await this.repository.login(entity)
  }
}