/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express from 'express';
import * as path from 'path';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger.json';

const app = express();

app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/api', (req, res) => {
  res.send({ message: 'Test get request received!' });
});
app.post('/api', (req, res) => {
  res.send({ message: 'Test post request received' });
});
app.post('/api/test-data', (req, res) => {
  res.send({ message: 'Welcome to back-end!' });
});

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
