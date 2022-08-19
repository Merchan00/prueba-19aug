import ConfigServer from "./app";
import './models/connection.ts'

class Server extends ConfigServer {
  private PORT:number;
  constructor() {
    super();
    this.PORT = this.app.get('PORT');
  }

  public listen(){
    this.app.listen(this.PORT, ()=>{
      console.log(`Server to Listen on ${this.PORT}`)
    })
  }

 
}

const listenServer = new Server();
listenServer.listen();
