function searchNews(searchTerm) {
    // URL of the API endpoint
    let apiUrl = 'https://hn.algolia.com/api/v1/search?query=' + searchTerm;

    // Get the news div
    const newsDiv = document.querySelector('#news');

    // Use fetch API to get the data
    fetch(apiUrl)
        .then(response => {
            // Check if the request was successful
            if(response.ok) {
                // Parse the response as JSON
                return response.json();
            } else {
                throw new Error('Network response was not ok');
            }
        })
        .then(data => {
            data.hits.forEach(story => {
                // create a new div for each story
                const storyDiv = document.createElement('div');
            
                // create a new anchor element for each story
                const storyLink = document.createElement('a');
            
                // set the href of the anchor element to the story's URL
                storyLink.href = story.url;
            
                // set the text of the anchor element to the story's title
                storyLink.innerText = story.title;
            
                // add the anchor element to the story div
                storyDiv.appendChild(storyLink);
            
                // add the story div to the news div
                newsDiv.appendChild(storyDiv);
            });
            
        })
        .catch(error => {
            // This block will run if there is an error with the fetch operation
            console.error('There has been a problem with your fetch operation: ', error);
        });
}
window.onload = function() {
    searchNews('');
}
