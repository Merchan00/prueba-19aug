import ConfigServer from "./app";

class Server extends ConfigServer {
  private PORT:number;
  constructor() {
    super();
    this.PORT = this.app.get('PORT');
  }

  public listen(){
    this.app.listen(this.PORT, ()=>{
      console.log("Server to Listen...")
    })
  }

 
}

const listenServer = new Server();
listenServer.listen();
