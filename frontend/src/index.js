const backendResponseElement = document.getElementById('backend-response');

fetch('/api/data') // Passe den Pfad an deine Backend-Routen an
    .then(response => response.text())
    .then(data => {
        backendResponseElement.textContent = data;
    })
    .catch(error => {
        backendResponseElement.textContent = 'Fehler beim Abrufen der Daten vom Backend.';
    });