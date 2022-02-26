import express, {Request, Response} from 'express';
import router from './routes/app.router';

const api = express();
api.use(express.json());
api.use('/', router);


api.listen(5000, () => console.log('Server listening'));