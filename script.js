document.getElementById('search-form').addEventListener('submit', function(e) {
    e.preventDefault();

    let searchTerm = document.getElementById('search-input').value;

    searchNews(searchTerm);
});

