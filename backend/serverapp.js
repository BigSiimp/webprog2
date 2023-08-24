const express = require('express');
const app = express();
const port = 3001;
const path = require('path');
const fs = require('fs');
const mysql = require('mysql2');

// Statische Dateien aus dem "frontend/public"-Ordner veröffentlichen
app.use(express.static(path.join(__dirname, '../frontend/public')));

app.get('/backend/DB', (req, res) => {
  const jsonData = { message: 'Hello from the backend!' };
  res.json(jsonData);
});

app.listen(port, () => {
  console.log(`Server läuft auf Port ${port}`);
});

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'passwort',
  database: 'Permangel'
});

// SQL-Datei lesen
const sqlScript = fs.readFileSync('permangel.sql', 'utf-8');

// SQL-Befehle ausführen
connection.query(sqlScript, (error, results) => {
  if (error) {
    console.error('Fehler beim Ausführen der SQL-Datei:', error);
  } else {
    console.log('SQL-Datei erfolgreich ausgeführt');
  }

  // Verbindung schließen
  connection.end();
});