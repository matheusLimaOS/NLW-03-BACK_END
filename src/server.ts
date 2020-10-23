import express from 'express';
import cors from 'cors';

import './database/connection';
import 'express-async-errors';

import router from "./routes";
import path from "path";

import errorHandler from './errors/handler';


const app = express();

app.use()
app.use(express.json())
app.use(router);
app.use('/uploads',express.static(path.join(__dirname,'..','uploads')));
app.use(errorHandler);
app.use(cors);

app.listen(3333);