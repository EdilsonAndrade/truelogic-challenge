import { Router } from 'express';
import sumRoutes from './sum.routes';

const routes = Router();

routes.use('/sum',sumRoutes);

export default routes;