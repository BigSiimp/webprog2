const express = require('express');
const app = express();
const port = 3000; // Du kannst hier einen anderen Port verwenden

app.get('/', (req, res) => {
  res.send('Hallo, dies ist dein Express-Backend!');
});

app.listen(port, () => {
  console.log(`Server läuft auf Port ${port}`);
});