const currentYear = new Date().getFullYear();


const footerParagraph = document.getElementById('copyright-year');

if (footerParagraph) {
  footerParagraph.textContent = `© ${currentYear} || Dillan Torres || Ecuador`;
}


const nLastModif = Date.parse(document.lastModified);
const readableDate = new Date(nLastModif);

document.getElementById("lastModified").textContent =
  "Last Modification: " + readableDate.toLocaleString();


const menuButton = document.getElementById('menu');
const nav = document.querySelector('.navigation');

menuButton.addEventListener('click', () => {
  menuButton.classList.toggle('open');
  nav.classList.toggle('open');
});
