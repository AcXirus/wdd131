const currentYear = new Date().getFullYear();

const footerParagraph = document.querySelector('footer p');

if (footerParagraph) {
  footerParagraph.textContent = `© ${currentYear} || Dillan Torres || Ecuador `;
}

//alert(document.lastModified);
let nLastModif = Date.parse(document.lastModified);
let readableDate = new Date(nLastModif);

document.getElementById("lastModified").textContent = 
  "Last Modification: " + readableDate.toLocaleString();

