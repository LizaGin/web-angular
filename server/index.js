const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const frontendOrigin = 'http://localhost:4200';
const port = 4300;
const corsOptions = {
  origin: frontendOrigin,
  methods: 'GET,POST,PATCH',
  allowedHeaders: 'Origin,X-Set-Authorization,X-Authorization,Accept,Content-Type,Access-Control-Request-Methods,Access-Control-Request-Headers,Access-Control-Allow-Headers',
  exposedHeaders: 'Origin,X-Set-Authorization,X-Authorization',
  credentials: true
};

// init server and add helpers&middlewares
const app = express();
app.use(bodyParser.json());
app.use(cors(corsOptions));

const auth = require('./auth');
app.use('', auth);

app.listen(4300, () => console.log(`Server is running on http://localhost:${port}.`));
