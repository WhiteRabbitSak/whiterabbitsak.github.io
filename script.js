window.onload = function() {
    var fadeInElement = document.querySelector('.TopContainer');
    fadeInElement.style.display = "none"; // Hide the element initially
    fadeInElement.style.display = "block"; // Show the element
};
let slideIndex = 0;

function showSlide(index) {
  const slides = document.querySelectorAll('.slide');
  if (index >= slides.length) { slideIndex = 0; }
  if (index < 0) { slideIndex = slides.length - 1; }
  slides.forEach(slide => slide.style.display = 'none');
  slides[slideIndex].style.display = 'block';
}

function nextSlide() {
  showSlide(++slideIndex);
}

function prevSlide() {
  showSlide(--slideIndex);
}

// Show the initial slide
showSlide(slideIndex);

const apiURL = 'https://api.api-ninjas.com/v1/quotes?category=inspirational'; // Replace with your API URL
const apiKey = 'OoJUPLCuR/3BqUgjKXh0xA==7HURdzTIgqGtqfAy'; // Replace with your actual API key

function fetchData() {

  const apiResponseElement = document.getElementById('api-response');
  // Remove the fade-in class to reset the animation
  apiResponseElement.classList.remove('fade-in');

  fetch(apiURL, {
    headers: {
        'X-Api-Key': apiKey
    }
})
.then(response => response.json())
.then(data => {
  const quote = data[0].quote;
    // Update the content of the response div with the API data
    apiResponseElement.innerHTML = `✨ ${quote} ✨`;
    apiResponseElement.classList.add('fade-in');
})
.catch(error => console.error('Error fetching data:', error));
}

// Initial API call when the page loads
window.onload = function() {
    fetchData();
};

// Event listener for the reload button
document.getElementById('api-button').addEventListener('click', function() {
    fetchData();
});

