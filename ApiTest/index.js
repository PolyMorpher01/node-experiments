const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./routes');
const env = require('./env.js');

const PORT = process.env.APP_PORT;

const app = express();
const router = express.Router();

app.use(express.json());
app.use(express.urlencoded());
app.use(bodyParser.json());

// API Routes
app.use('/api', routes);

app.listen(PORT, () => {
  console.log('Listening to port: ' + PORT);
});

// export default app;
