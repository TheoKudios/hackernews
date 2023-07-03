function searchNews(searchTerm) {
    
    let apiUrl = 'https://hn.algolia.com/api/v1/search?query=' + searchTerm;

    
    const newsDiv = document.querySelector('#news');

  
    fetch(apiUrl)
        .then(response => {
           
            if(response.ok) {
            
                return response.json();
            } else {
                throw new Error('Network response was not ok');
            }
        })
        .then(data => {
            data.hits.forEach(story => {
               
                const storyDiv = document.createElement('div');
            
                
                const storyLink = document.createElement('a');
            
                
                storyLink.href = story.url;
            
                storyLink.innerText = story.title;
            
                storyDiv.appendChild(storyLink);
            
                newsDiv.appendChild(storyDiv);
            });
            
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation: ', error);
        });
}
window.onload = function() {
    searchNews('');
}
