import { Router } from 'express';
import { controller } from '../factories/UserFactory';

const userRoutes = Router()
userRoutes.post('/', controller.login);

userRoutes.post('/register', controller.register);

userRoutes.post('/logout', controller.logout);

export default userRoutes;