const hamburgerIcon = document.querySelector('.hamburger-icon');
const navLinks = document.querySelector('.nav-links');
const closeIcon = document.querySelector('.close-icon-container');

const menuOpen = () => {
  navLinks.classList.add('show-link');
  closeIcon.style.display = 'block';
  hamburgerIcon.style.display = 'none';
};

const menuClose = () => {
  navLinks.classList.remove('show-link');
  closeIcon.style.display = 'none';
  hamburgerIcon.style.display = 'block';
};

hamburgerIcon.addEventListener('click', menuOpen);
closeIcon.addEventListener('click', menuClose);