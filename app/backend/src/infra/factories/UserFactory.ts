import IUserPersistence  from '../../domain/repository/IUserPersistence';
import UserRepository  from '../../domain/repository/UserRepository';
import UserCase from '../../domain/usecase/User.usecase';
import UserController from '../controllers/User.controller';
import UserAdapter from '../persistences/User.persistence';

const persistence: IUserPersistence<any> = new UserAdapter()
const userRepository = new UserRepository(persistence)
const userUseCase = new UserCase(userRepository)
const controller = new UserController(userUseCase)

export { controller }