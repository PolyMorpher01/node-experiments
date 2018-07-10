const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./routes');
const env = require('./env');
const errorHandler = require('./middlewares/errorHandler');

const app = express();
const router = express.Router();

app.use(express.json());
app.use(express.urlencoded());
app.use(bodyParser.json());

// API Routes
app.use('/api', routes);

//Error Middlewares
app.use(errorHandler.generic);

const PORT = process.env.APP_PORT;
app.listen(PORT, () => {
  console.log('Listening to port: ' + PORT);
});
