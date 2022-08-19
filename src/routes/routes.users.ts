import { Router } from 'express';
import ControllerUser from '../controllers/controller.user';



class RouterUser extends ControllerUser{
  private _router:Router = Router();

  constructor() {
    super()
    this._router.get('/users', this.getAll);

    this._router.get('/users/:id', this.getOne);
    this._router.get('/users/:id', this.getOne);
    this._router.post('/users', this.create);
    this._router.put('/users/:id', this.update);
    this._router.delete('/users/:id', this.delete);

  }

  get router():Router{
    return this._router;
  }
}
export default RouterUser;
