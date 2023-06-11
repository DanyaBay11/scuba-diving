const navbar = document.querySelector('.navbar');

// Function to add the class when scrolling
function addClassOnScroll() {
  if (window.pageYOffset > 0) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}

// Attach the scroll event listener
window.addEventListener('scroll', addClassOnScroll);

const menuIcon = document.querySelector('.navbar__content-menu-icon');
const menuItems = document.querySelector('.navbar__content__menu-ul');

menuIcon.addEventListener('click', () => {
    menuItems.classList.toggle('show');
});

const menu = document.querySelector('.navbar__content__menu');

menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('active');
  menu.classList.toggle('show');
});

// Add event listener to close the menu when X button is clicked
const closeButton = menu.querySelector('.close-button');
closeButton.addEventListener('click', () => {
  menuIcon.classList.remove('active');
  menu.classList.remove('show');
});
