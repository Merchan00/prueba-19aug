import { Request, Response, NextFunction } from "express";

class ControllerUser {
  protected getAll(req:Request, res:Response, next:NextFunction){
    res.send("Hola mundo, estoy trayendo todo");
  }

  protected getOne(req:Request, res:Response, next:NextFunction){
    let {id} = req.params;
    res.json({message: "Hola mundo, estoy trasyendo uno "+ id});
  }

  protected create(req:Request, res:Response, next:NextFunction){
    let body = req.body;
    res.json({user:body});
  }

  protected update(req:Request, res:Response, next:NextFunction){
    let {id} = req.params;
    let body = req.body;
    res.send("Hola mundo, estoy actualizando un usuario");
  }

  protected delete(req:Request, res:Response, next:NextFunction){
    res.send("Hola mundo, estoy eliminando un usuario ");
  }
}

export default ControllerUser
