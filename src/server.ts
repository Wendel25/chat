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

    this.app.use(cors());

    this.io = new Server(this.http, {
      cors: {
        origin: 'http://localhost:4200',
        methods: ['GET', 'POST'],
      },
    });

    this.listenSocket();
    this.setupRoutes();
  }

  listenServer() {
    this.http.listen(3000, () => console.log('Servidor inicializado'));
  }

  listenSocket() {
    this.io.on('connection', (socket) => {
      console.log(socket.id);

      socket.on('message', (msg) => {
        console.log('Mensagem: ', msg);

        this.io.emit('message', msg);
      });
    });
  }

  setupRoutes() {
    this.app.get('/', (req, res) => {
      res.sendFile(__dirname + '/index.html');
    });
  }
}

const app = new App();
app.listenServer();
