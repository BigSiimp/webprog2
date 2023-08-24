// server/server.js
const express = require('express');
const dbConnection = require('./db.js');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const errorHandler = require('_middleware/error-handler');
const PORT = 3001;

app.get('/', (req, res) => {
    res.send('Welcome to the backend server!');
  });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
