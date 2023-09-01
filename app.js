import express from 'express'
import 'dotenv/config.js'
import './config/database.js'
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan'
import indexRouter from './routes/index.js'
import cors from 'cors'
import { __dirname } from './utils.js'
import fileUpload from 'express-fileupload';

const app = express();


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(fileUpload({ tempFileDir: '/temp'}))
app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);


export default app
