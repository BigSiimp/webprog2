
import React, { useState, useEffect } from 'react';

function Frontend() {
  const [backendData, setBackendData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/backend/DB')
      .then(response => response.json())
      .then(data => {
        console.log('Response from backend:', data); 
     })
      .catch(error => {
        console.error('Fehler beim Abrufen der Daten vom Backend:', error);
      });
  }, []);

  return (
    <div>
      <h1>Frontend</h1>
      {loading ? (
        <p>Lade Daten...</p>
      ) : (
        <div>
          <p>{backendData.message}</p>
          <pre>{JSON.stringify(backendData.data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default Frontend;