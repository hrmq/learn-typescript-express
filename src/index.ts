import express from 'express';
import http from 'http';
import path from 'path';

import bodyParser from 'body-parser';
import logger from 'morgan';

import { AppRouter } from './AppRoutes';
import './controllers/LoginController';

const app: express.Application = express();

// Express.js configuration
app.set('port', process.env.port || 3000);

// Express.js middleware configuration
app.use(bodyParser.json({ limit: '100kb' }));
app.use(logger('dev'));

// routes
app.use(AppRouter.getInstance());

const server = http.createServer(app);

server.listen(app.get('port'), function () {
  console.info(`Express server listening on port ${app.get('port')}`);
});
