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

const products = [
  { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
  { id: "fc-2050", name: "power laces", averagerating: 4.7 },
  { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
  { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
  { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];

const productSelect = document.getElementById("Products");
if (productSelect) {
  products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    productSelect.appendChild(option);
  });
}

if (window.location.href.includes("review.html")) {
  let count = localStorage.getItem('reviewCount');
  if (!count) {
    count = 0;
  }
  count = parseInt(count) + 1;
  localStorage.setItem('reviewCount', count);

  const reviewDiv = document.getElementById("review-count-message");
  if (reviewDiv) {
    reviewDiv.textContent = `You have submitted ${count} review(s).`;
  }
}
