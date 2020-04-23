import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import { Server } from '@overnightjs/core';
import { Logger } from '@overnightjs/logger';
import { UserController } from './controllers/UserController';
import { RootController } from './controllers/RootController';

export class AppServer extends Server {
  private server: any;

  constructor() {
    super(process.env.NODE_ENV === 'development');

    // express.js setup
    this.app.set('view engine', 'pug');
    this.app.use(express.static('views'));

    // express.js middlewares
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.setupControllers();
  }

  private setupControllers(): void {
    const rootController = new RootController();
    const userController = new UserController();

    super.addControllers([userController, rootController]);
  }

  public start(port: number): void {
    this.server = http.createServer(this.app);
    this.server.listen(port, () => {
      Logger.Imp(`Server listining on port ${port}`);
    });
  }

  public shutdown(): void {
    this.server.close(process.exit);
  }
}
