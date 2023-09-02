const express = require('express');
const db = require('./db.js'); // Importiere die db.js-Datei
const app = express();
const cors = require('cors');
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the backend server!');
});

app.use(cors({
  origin: 'http://localhost:3000',
}));

// Daten für Übermittlungen an andere in Form einer Abfrage am Eckpunkt /joboffers
app.get('/joboffers', (req, res) => {
  const query = 'SELECT * FROM joboffers';
  db.all(query, (error, rows) => {
    if (error) {
      console.error('Error fetching job offers:', error);
      res.status(500).json({ error: 'Error fetching job offers' });
    } else {
      res.json(rows); // Senden der abgerufenen Daten als JSON
    }
  });
});

// Daten von Bewerbern ausgebem
app.get('/jobapplicants', (req, res) => {
  const query = 'SELECT * FROM users';
  db.all(query, (error, rows) => {
    if (error) {
      console.error('Error fetching users:', error);
      res.status(500).json({ error: 'Error fetching users' });
    } else {
      res.json(rows); // Senden der abgerufenen Daten als JSON
    }
  });
});

//Joboffer posten DONE
app.post('/joboffers', (req, res) => {
  const {
    company,
    title,
    description,
    payment,
    skills,
    startDate,
    createdOn,
    createdBy,
    softwareVersion,
    owner_id
  } = req.body;

  // Überprüfe, ob die Pflichtfelder vorhanden sind 
  if (!company || !title || !description || !payment || !skills || !startDate) {
    return res.status(400).json({ error: 'Required fields are missing' });
  }

  const query = `
    INSERT INTO joboffers 
    (company, title, description, payment, skills, startDate, createdOn, createdBy, softwareVersion, owner_id) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  const values = [
    company,
    title,
    description,
    payment,
    skills,
    startDate,
    createdOn,
    createdBy,
    softwareVersion,
    owner_id
  ];

  db.run(query, values, (error) => {
    if (error) {
      console.error('Error creating job offer:', error);
      res.status(500).json({ error: 'Error creating job offer' });
    } else {
      res.json({ message: 'Job offer created successfully' });
    }
  });
});

//Joboffer aktualisieren DONE
app.patch('/joboffers/:id', (req, res) => {
  const jobId = req.params.id;
  const { title, company, payment, skills, description, startDate } = req.body;

  const query = `
    UPDATE joboffers
    SET title = ?,
        company = ?,
        payment = ?,
        skills = ?,
        description = ?,
        startDate = ?
    WHERE id = ?
  `;
  
  const values = [title, company, payment, skills, description, startDate, jobId];

  db.run(query, values, (error) => {
    if (error) {
      console.error('Error updating job offer:', error);
      res.status(500).json({ error: 'Error updating job offer' });
    } else {
      res.json({ message: 'Job offer updated successfully' });
    }
  });
});



// Stellenangebot löschen anhand der ID  DONE
app.delete('/joboffers/:id', (req, res) => {
  const id = req.params.id;

  const query = 'DELETE FROM joboffers WHERE id = ?';

  db.run(query, [id], (error) => {
    if (error) {
      console.error('Error deleting job offer:', error);
      res.status(500).json({ error: 'Error deleting job offer' });
    } else {
      res.json({ message: 'Job offer deleted successfully' });
    }
  });
});

// Stellenangebote nach Partnerfirma filtern DONE
app.get('/joboffers/company/:company', (req, res) => {
  const company = req.params.company;
  const query = 'SELECT * FROM joboffers WHERE company = ? ORDER BY createdOn DESC';
  db.all(query, [company], (error, rows) => {
    if (error) {
      console.error('Error fetching job offers:', error);
      res.status(500).json({ error: 'Error fetching job offers' });
    } else {
      res.json(rows);
    }
  });
});

// Einzelnes Stellenangebot nach ID abfragen DONE
app.get('/joboffers/:id', (req, res) => {
  const id = req.params.id;
  const query = 'SELECT * FROM joboffers WHERE id = ?';
  db.get(query, [id], (error, row) => {
    if (error) {
      console.error('Error fetching job offer:', error);
      res.status(500).json({ error: 'Error fetching job offer' });
    } else {
      res.json(row);
    }
  });
});

// Joboffers nach createdOn Datum nach dem Neuesten sortieren
app.get('/joboffers/createdOn/all', (req, res) => {
  const query = `
    SELECT * FROM joboffers
    ORDER BY createdOn DESC
  `;
  db.all(query, (error, row) => {
    if (error) {
      console.error('Error fetching latest job offer:', error);
      res.status(500).json({ error: 'Error fetching latest job offer' });
    } else {
      res.json(row);
    }
  });
});


// Joboffers nach Payment filtern DONE
app.get('/joboffers/payment/all', (req, res) => {
  const query = 'SELECT * FROM joboffers ORDER BY payment DESC';
  db.all(query, (error, rows) => {
    if (error) {
      console.error('Error fetching job offers:', error);
      res.status(500).json({ error: 'Error fetching job offers' });
    } else {
      res.json(rows);
    }
  });
});




app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});