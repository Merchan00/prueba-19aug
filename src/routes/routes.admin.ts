import { Router, Express } from "express";
import RouterUser from "./routes.users";

const adminRouter = (app:Express)=>{
  let routerUser = new RouterUser().router;


  let routes:Router = Router();
  app.use('/api/v1', routes);
  routes.use(routerUser);
}

export default adminRouter;
