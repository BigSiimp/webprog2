const sqlite3 = require('sqlite3').verbose();


//Stellt sqlite Connection her 
let db = new sqlite3.Database('./daten/permangel.db', sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected to the in-memory SQlite database.');
});

module.exports = db;

//Schließt Connection sofern keine weiteren Anfragen kommen
// db.close((err) => {                                
//  if (err) {
//     return console.error(err.message);
//  }
//  console.log('Close the database connection.');
// });


//Alte SQL Daten falls mit mysql gestartet werden muss
//const connection = mysql.createConnection({
 // host: 'localhost',
 // user: 'root',
 // password: 'passwort',
 // database: 'permangel',
 // port: 3306
//});  
