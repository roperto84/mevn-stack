import express, { Application } from 'express'
import compression from 'compression'
import cors from 'cors'
import morgan from 'morgan'
import helmet from 'helmet'
import cookieParser from 'cookie-parser'
import path from 'path';
import router from './routes'

const app: Application = express();
const TOKEN = process.env.TOKEN_SECRET || 'mysecretjwttoken';
// Settings
app.set('port', process.env.PORT || 4100);
app.set('Secret', TOKEN);
// middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(helmet());
app.use(compression());
app.use(cors());
app.use(cookieParser(TOKEN));
// static
app.use('/uploads', express.static(path.resolve('uploads')));
//Routes
app.use(router);

export default app;