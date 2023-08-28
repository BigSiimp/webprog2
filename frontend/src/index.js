import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Import der Hauptkomponente

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // Hier wird Ihre App in das DOM gerendert
);