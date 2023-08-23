const express = require('express');
const app = express();
const port = 3000; // Du kannst hier einen anderen Port verwenden
const path = require('path'); // Modul zum Arbeiten mit Dateipfaden

// Statische Dateien aus dem "frontend/public"-Ordner veröffentlichen
app.use(express.static(path.join(__dirname, '../frontend/public')));

app.get('/', (req, res) => {
  res.send('Hallo, dies ist dein Express-Backend!');
});

app.listen(port, () => {
  console.log(`Server läuft auf Port ${port}`);
});