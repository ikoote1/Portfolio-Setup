const hamburger = document.querySelector('.icon-Menu');
const x = document.querySelector('.menu-17');
const navMenu = document.querySelector('.menu-p');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});
x.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});
document.querySelectorAll('.menu-r').forEach((n) => n.addEventListener('click', () => {
  navMenu.classList.toggle('active');
}));
