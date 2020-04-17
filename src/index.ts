import express from 'express';
import http from 'http';
import path from 'path';

import bodyParser from 'body-parser';
import logger from 'morgan';

const app: express.Application = express();

// Express.js configuration
app.set('port', process.env.port || 3000);

app.use(bodyParser.json({ limit: '100kb' }));
app.use(logger('dev'));

app.get('/', (req, res) => {
  res.send('hi there');
});

const server = http.createServer(app);

server.listen(app.get('port'), function () {
  console.log('server is running');
});
