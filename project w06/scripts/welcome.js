window.addEventListener('load', () => {
    const welcome = document.getElementById('welcome');

    if (welcome) {
        const fadeDuration = 600; 
        const delayBeforeFade = 6000; 

        welcome.style.transition = `opacity ${fadeDuration}ms ease, transform ${fadeDuration}ms ease`;

        setTimeout(() => {
            welcome.style.opacity = '0';
            welcome.style.transform = 'scale(1.1)';
            welcome.style.pointerEvents = 'none';
        }, delayBeforeFade);
    }
});

const menuButton = document.getElementById('menu');
const nav = document.querySelector('.navigation');

menuButton.addEventListener('click', () => {
  menuButton.classList.toggle('open');
  nav.classList.toggle('open');
});
