import express, {Express} from 'express';
import morgan from 'morgan';
import cors from 'cors';
import jwt from 'jsonwebtoken';

abstract class ConfigServer {
  protected app:Express = express();
  constructor() {
    this.app.set('PORT', 3000);
    this.app.use(morgan('dev'));
    this.app.use(cors());
  
  }
}

export default ConfigServer;
