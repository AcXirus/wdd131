/*I will start to get the copyright and 
    the date of last modified */

const currentYear = new Date().getFullYear();
const footerParagraph = document.getElementById('copyright-year');
if (footerParagraph) {
  footerParagraph.textContent = `© ${currentYear} || Dillan Torres || Ecuador`;
}

const nLastModif = Date.parse(document.lastModified);
const readableDate = new Date(nLastModif);
const lastMod = document.getElementById("lastModified");
if (lastMod) {
  lastMod.textContent = "Last Modification: " + readableDate.toLocaleString();
}

/* ----------- Home Volcano Page ----------- */
/* I will add a code to change 
the princture every 4 seconds*/

    const logo = document.getElementById("logo");
    const images = [
        "images/Picture-Volcano-View1.webp",
        "images/Picture-Volcano-View2.webp",
        "images/Picture-Volcano-View3.webp"
    ];

    let index = 0;

    setInterval(() => {
      index = (index + 1) % images.length;
      logo.src = images[index];
    }, 4000);


/* I will add a code to show and hide 
the answer form the question */

document.querySelectorAll(".question").forEach(button => {
    button.addEventListener("click", () => {
      const answer = button.nextElementSibling;
      answer.style.display = (answer.style.display === "block") ? "none" : "block";
    });
});

/* I need add to button to show and hide 
the navegation option */

const menuButton = document.getElementById('menu');
const nav = document.querySelector('.navigation');

menuButton.addEventListener('click', () => {
  menuButton.classList.toggle('open');
  nav.classList.toggle('open');
});