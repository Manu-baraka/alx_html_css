const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.header-links ul');

// Toggle menu
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active'); // show/hide menu
  hamburger.classList.toggle('active'); // animate hamburger
});