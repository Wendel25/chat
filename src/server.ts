import express, { Application } from 'express';
import http from 'http';
import { Server } from 'socket.io';
import cors from 'cors';

class App {
  private app: Application;
  private http: http.Server;
  private io: Server;

  constructor() {
    this.app = express();
    this.http = http.createServer(this.app);

    // Middleware CORS para o servidor principal
    this.app.use(cors());

    this.io = new Server(this.http, {
      cors: {
        origin: 'http://localhost:4200',
        methods: ['GET', 'POST'],
      },
    });

    this.listenSocket();
  }

  listenServer() {
    this.http.listen(3000, () => console.log('Servidor mensagens -> porta 3000'));
  }

  listenSocket() {
    this.io.on('connection', (socket) => {
      socket.on('message', (msg) => {
        this.io.emit('message', msg);
      });
    });
  }

  public getSocketServer(): Server {
    return this.io;
  }
}

const app1 = new App();
app1.listenServer();
