import IClientPersistence from '../../domain/repository/IClientPersistence';
import ClientRepository from '../../domain/repository/ClientRepository';
import ClientUseCase from '../../domain/usecase/Client.usecase';
import ClientController from '../controllers/Client.controller';
import ClientAdapter from '../persistences/Client.persistence';

const ipersitence: IClientPersistence<any> = new ClientAdapter()
const clientRepository = new ClientRepository(ipersitence)
const clientUseCase = new ClientUseCase(clientRepository)
const controller = new ClientController(clientUseCase)

export { controller }