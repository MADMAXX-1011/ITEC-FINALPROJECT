// Toggle Navigation
const toggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('nav ul');

toggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});


