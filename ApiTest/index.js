const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./routes');

const PORT = 3000;


const app = express();
const router = express.Router();


app.use(express.json());
app.use(express.urlencoded());
app.use(bodyParser.json());


// API Routes
app.use('/api', routes);

app.listen(PORT, () => {
    console.log('Listening to port: '+PORT);
});

// export default app;