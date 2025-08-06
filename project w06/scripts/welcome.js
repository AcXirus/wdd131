window.addEventListener('load', () => {
    const welcome = document.getElementById('welcome');
    setTimeout(() => {
        welcome.style.opacity = '0';
        welcome.style.transform = 'scale(1.1)'
        welcome.style.pointerEvents = 'none';
    }, 6000);
});

const menuButton = document.getElementById('menu');
const nav = document.querySelector('.navigation');

menuButton.addEventListener('click', () => {
  menuButton.classList.toggle('open');
  nav.classList.toggle('open');
});
