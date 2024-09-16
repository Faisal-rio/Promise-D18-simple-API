// Function to fetch and display the IP address
document.getElementById('fetch-ip').addEventListener('click', function() {
    // Define the IP API URL
    const apiUrl = 'https://api.ipify.org?format=json';

    // Display loading message
    const ipContainer = document.getElementById('ip-container');
    ipContainer.innerHTML = 'Fetching IP address...';
    ipContainer.style.display = 'block';

    // Fetch the IP address from the API
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); // Parse JSON response
        })
        .then(data => {
            // Display the IP address
            ipContainer.innerHTML = `
                <div class="ip-box fade-in">
                    <p><strong>Your IP Address:</strong></p>
                    <p>${data.ip}</p>
                </div>
            `;
        })
        .catch(error => {
            // Handle any errors
            ipContainer.innerHTML = 'Error fetching IP address. Please try again.';
            console.error('Error:', error);
        });
});
