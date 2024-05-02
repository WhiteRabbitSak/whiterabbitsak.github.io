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
