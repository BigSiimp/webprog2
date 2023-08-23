const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'Passwort',
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



