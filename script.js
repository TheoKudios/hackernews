document.getElementById('search-form').addEventListener('submit', function(e) {
    // Verhindern Sie, dass das Formular tatsächlich eingereicht wird
    e.preventDefault();

    // Holt den Suchbegriff aus dem Eingabefeld
    let searchTerm = document.getElementById('search-input').value;

    // Hier können Sie dann Ihre Funktion zum Abrufen und Anzeigen der Suchergebnisse aufrufen
    searchNews(searchTerm);
});

