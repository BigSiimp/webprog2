const express = require('express');
const app = express();
const port = 3001; // Du kannst hier einen anderen Port verwenden
const path = require('path'); // Modul zum Arbeiten mit Dateipfaden

// Statische Dateien aus dem "frontend/public"-Ordner veröffentlichen
app.use(express.static(path.join(__dirname, '../frontend/public')));

app.get('/api/data', (req, res) => {
  const jsonData = { message: 'Hello from the backend!' };
  res.json(jsonData);
});

app.listen(port, () => {
  console.log(`Server läuft auf Port ${port}`);
});