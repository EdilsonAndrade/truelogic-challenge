import { Router } from 'express';
import CalculateNumberService from '../services/CalculateNumberService';



const sumRouter = Router();
sumRouter.post('/', async (request, response) => {
  try {
    const { num1, num2 } = request.body;

    const calculateNumberService = new CalculateNumberService();

    const result = await calculateNumberService.execute({ num1, num2 });

    return response.json({result:result});

  } catch (error) {
    return response.status(404).json({ error: 'Invalid data or something missing' })
  }
});

export default sumRouter;