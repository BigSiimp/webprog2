const express = require('express');
const router = express.Router();
const db = require('./db'); // Passe den Pfad an

router.post('/insert', (req, res) => {
  const newData = {
    title: 'Neuer Eintrag',
    description: 'Das ist ein neuer Eintrag in der Datenbank.'
  };

  const query = 'INSERT INTO your_table_name SET ?';

  db.query(query, newData, (err, results) => {
    if (err) {
      console.error('Fehler beim Einfügen der Daten:', err);
      res.status(500).send('Fehler beim Einfügen der Daten');
    } else {
      console.log('Daten erfolgreich eingefügt:', results);
      res.status(200).send('Daten erfolgreich eingefügt');
    }
  });
});

module.exports = router;