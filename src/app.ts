import express, {Express} from 'express';
import morgan from 'morgan';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import adminRouter from './routes/routes.admin';

import api from './controllers/middlewares/api';
import { resolveTransitionHooks } from 'vue';

abstract class ConfigServer {
  protected app:Express = express();
  constructor() {
    this.app.set('PORT', 3000);
    this.app.use(morgan('dev'));
    this.app.use(cors());
    this.app.use(express.json());
    adminRouter(this.app);
    this.app.use('/prueba', api.userValid)
    
    this.app.use('/:username', (req, res, next)=>{

      api.ejemplo;
      
    });


  }
}

export default ConfigServer;
