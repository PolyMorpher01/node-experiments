const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./routes');
const env = require('./env');

const app = express();
const router = express.Router();

app.use(express.json());
app.use(express.urlencoded());
app.use(bodyParser.json());

// API Routes
app.use('/api', routes);

const PORT = process.env.APP_PORT;
app.listen(PORT, () => {
  console.log('Listening to port: ' + PORT);
});