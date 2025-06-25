import express from 'express';
import { dbConnection } from './databases/dbConnections.js';
import { userRouter } from './src/modules/user/user.routes.js';
import { notesRouter } from './src/modules/notes/notes.routes.js';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from  'cors';
import 'dotenv/config';

const app = express();
app.use(cors({ // this has to be first
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}));
app.use(express.json());
app.use(helmet()); //protect API headers
app.use(userRouter);
app.use('/notes', notesRouter);
app.use(morgan('tiny')); //middleware to log extra information on API call
const port = 3000;

dbConnection();
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`));