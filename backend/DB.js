const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3000,
  user: 'user',
  password: '1234',
  database: 'Permangel'
});

connection.connect(err => {
  if (err) {
    console.error('Fehler bei der Verbindung zur Datenbank:', err);
  } else {
    console.log('Verbindung zur Datenbank erfolgreich');
  }
});

module.exports = connection;