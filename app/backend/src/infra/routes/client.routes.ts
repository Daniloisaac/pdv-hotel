import { Router } from 'express';
import { controller } from '../factories/ClientFactory';

const userRoutes = Router()
userRoutes.post('/register', controller.register);

export default userRoutes;