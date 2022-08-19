import {Request, Response, NextFunction, request} from 'express';



// interface IUser{
//     user:string;
// }

class validationUser{


    static userValid(req:Request, res:Response, next:NextFunction){

       return res.send('UserValid');
      
    }

    static ejemplo( req:Request, res:Response ){


        const condicion = `${req.params}.username`;
        if( condicion == '1'){
            res.send('Bienvenido');
        }
        else{
            res.send('no es bienvenido');
        }
    }

}

export default validationUser;