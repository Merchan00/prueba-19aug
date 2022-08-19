import {Request, Response, NextFunction} from 'express';


// interface IUser{
//     user:string;
// }

class validationUser{


    static userValid(req:Request, res:Response, next:NextFunction){
       return res.send('UserValid');
      
    }

}

export default validationUser;