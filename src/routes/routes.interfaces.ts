import { Router } from "express"

export interface router {
  _router:Router;
  get router():Router
}
