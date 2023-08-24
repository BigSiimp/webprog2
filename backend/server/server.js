const express = require('express');
const dbConnection = require('./db.js');
const app = express();
const cors = require('cors'); // Importieren des CORS-Moduls
const PORT = 3001;

app.use(cors());

app.get('/joboffers', (req, res) => {
  const query = 'SELECT * FROM joboffers'; // Beispiel-Abfrage, um alle Jobangebote abzurufen
  dbConnection.query(query, (error, results) => {
    if (error) {
      console.error('Error fetching job offers:', error);
      res.status(500).json({ error: 'Error fetching job offers' });
    } else {
      res.json(results);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
