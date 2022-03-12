import express from 'express';
import router from './routes/app.router';
import cors from 'cors';

const api = express();
api.use(express.json());
api.use(cors());
api.use('/', router);

api.listen(5000, () => console.log('Server listening'));