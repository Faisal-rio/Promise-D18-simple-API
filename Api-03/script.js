// Function to fetch a random joke and display it
document.getElementById('fetch-joke').addEventListener('click', function() {
    // Define the joke API URL
    const apiUrl = 'https://v2.jokeapi.dev/joke/Any';

    // Display loading message
    const jokeContainer = document.getElementById('joke-container');
    jokeContainer.innerHTML = 'Fetching a joke...';
    jokeContainer.style.display = 'block';

    // Fetch a random joke from the API
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); // Parse JSON response
        })
        .then(data => {
            // Display the joke
            let jokeContent = '';
            if (data.type === 'single') {
                jokeContent = `<p>${data.joke}</p>`;
            } else if (data.type === 'twopart') {
                jokeContent = `<p><strong>${data.setup}</strong></p><p>${data.delivery}</p>`;
            }
            jokeContainer.innerHTML = `
                <div class="joke-box fade-in">
                    ${jokeContent}
                </div>
            `;
        })
        .catch(error => {
            // Handle any errors
            jokeContainer.innerHTML = 'Error fetching joke. Please try again.';
            console.error('Error:', error);
        });
});
