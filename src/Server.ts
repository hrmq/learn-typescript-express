import express from 'express';
import bodyParser from 'body-parser';
import { Server } from '@overnightjs/core';
import { Logger } from '@overnightjs/logger';
import { UserController } from './controllers/UserController';

export class AppServer extends Server {
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
    const userController = new UserController();
    super.addControllers([userController]);
  }

  public start(port: number): void {
    this.app.listen(port, () => {
      Logger.Imp(`Server listining on port ${port}`);
    });
  }
}
