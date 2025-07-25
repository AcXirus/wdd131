const currentYear = new Date().getFullYear();


const footerParagraph = document.getElementById('copyright-year');

if (footerParagraph) {
  footerParagraph.textContent = `© ${currentYear} || Dillan Torres || Ecuador`;
}


const nLastModif = Date.parse(document.lastModified);
const readableDate = new Date(nLastModif);

document.getElementById("lastModified").textContent = "Last Modification: " + readableDate.toLocaleString();


const menuButton = document.getElementById('menu');
const nav = document.querySelector('.navigation');

menuButton.addEventListener('click', () => {
  menuButton.classList.toggle('open');
  nav.classList.toggle('open');
});

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: " Tijuana Mexico",
    location: "southeastern Tijuana, Mexico",
    dedicated: "2015, December, 13",
    area: 33367,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/tijuana-mexico-temple/tijuana-mexico-temple-2942-thumb.jpg"  
  },  
  {
    templeName: "Fort Collins Colorado",
    location: "Fort Collins, Colorado, United States",
    dedicated: "2016, October, 16",
    area: 42000,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/fort-collins-colorado-temple/fort-collins-colorado-temple-14455-thumb.jpg"
  },  
  {
    templeName: "Tokyo Japan",
    location: "Tokyo, Japan",
    dedicated: "2022, July, 3",
    area: 53997,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/tokyo-japan-temple/tokyo-japan-temple-8154-thumb.jpg"
  },
];

createTempleCard(temples);

const oldlink = document.querySelector("#oldfilter");
const newlink = document.querySelector("#newfilter");
const largelink = document.querySelector("#largefilter");
const smalllink = document.querySelector("#smallfilter");
const homelink = document.querySelector("#homefilter");

oldlink.addEventListener("click", () => {
  createTempleCard(temples.filter(temple => {
    const year = parseInt(temple.dedicated.split(",")[0]);
    return year < 1999;
  }));
});

newlink.addEventListener("click", () => {
  createTempleCard(temples.filter(temple => {
    const year = parseInt(temple.dedicated.split(",")[0]);
    return year > 2000;
  }));
});

largelink.addEventListener("click", () => {
  createTempleCard(temples.filter(temple => temple.area > 90000));
});

smalllink.addEventListener("click", () => {
  createTempleCard(temples.filter(temple => temple.area < 10000));
});

homelink.addEventListener("click", () => {
  createTempleCard(temples); // mostrar todos
});

function createTempleCard(filteredTemples) {
  document.querySelector(".res-grid").innerHTML = "";
  filteredTemples.forEach(temple => {
    let card = document.createElement("section");
    let name = document.createElement("h2");
    let location = document.createElement("p");
    let dedication = document.createElement("p");
    let area = document.createElement("p");
    let img = document.createElement("img");

    name.textContent = temple.templeName;
    location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
    dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
    area.innerHTML = `<span class="label">Size:</span> ${temple.area}`;
    img.setAttribute("src", temple.imageUrl);
    img.setAttribute("alt", `${temple.templeName} Temple`);
    img.setAttribute("loading", "lazy");

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedication);
    card.appendChild(area);
    card.appendChild(img);

    document.querySelector(".res-grid").appendChild(card);
  })
}
