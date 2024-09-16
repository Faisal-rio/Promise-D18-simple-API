function fetchFoxImage() {
  document.getElementById('loading').style.display = 'block';
  fetch('https://randomfox.ca/floof/')
      .then(response => response.json())
      .then(data => {
          document.getElementById('loading').style.display = 'none';
          displayFoxImage(data.image);
      })
      .catch(error => {
          document.getElementById('loading').style.display = 'none';
          console.error('Error fetching the fox image:', error);
      });
}

function displayFoxImage(imageUrl) {
  const container = document.getElementById('data-container');
  container.innerHTML = `
      <div class="card col-md-4">
          <div class="card-inner">
              <div class="card-front">
                  <img src="${imageUrl}" alt="Random Fox" class="card-img-top">
              </div>
              <div class="card-back">
                  Super Cute Fox!
              </div>
          </div>
      </div>
  `;
}

// Call the fetchFoxImage function when the page loads
fetchFoxImage();
