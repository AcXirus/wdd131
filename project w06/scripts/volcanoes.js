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

if (!logo) {
  return;
}
    
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

/* -------------------- Volcano HTML ------------------- */

/* I create a responsives images with lazy load and a brief infomation */

const Volcanoes = [
  {
    name: "Cotopaxi",
    height: 5897,
    location: "Cotopaxi Province",
    region: "Sierra",
    imageUrl: "images/cotopaxi.webp"
  },
  {
    name: "Chimborazo",
    height: 6263,
    location: "Chimborazo Province",
    region: "Sierra",
    imageUrl: "images/chimborazo.webp"
  },
  {
    name: "Tungurahua",
    height: 5023,
    location: "Tungurahua Province",
    region: "Sierra",
    imageUrl: "images/tungurahua.webp"
  },
  {
    name: "Reventador",
    height: 3562,
    location: "Napo Province",
    region: "Oriente",
    imageUrl: "images/reventador.webp"
  },
  {
    name: "Sangay",
    height: 5286,
    location: "Morona Santiago Province",
    region: "Oriente",
    imageUrl: "images/sangay.webp"
  },
  {
    name: "Pichincha",
    height: 4784,
    location: "Pichincha Province",
    region: "Sierra",
    imageUrl: "images/pichincha.webp"
  },
  {
    name: "Cayambe",
    height: 5790,
    location: "Pichincha Province",
    region: "Sierra",
    imageUrl: "images/cayambe.webp"
  },
  {
    name: "Wolf",
    height: 1710,
    location: "Isabela Island",
    region: "Galápagos",
    imageUrl: "images/wolf.webp"
  },
  {
    name: "Antisana",
    height: 5753,
    location: "Napo and Pichincha Provinces",
    region: "Sierra",
    imageUrl: "images/Antisana.webp"
  },
  {
    name: "Pululahua",
    height: 3356,
    location: "Pichincha Province",
    region: "Sierra",
    imageUrl: "images/pululahua.webp"
  },
  {
    name: "Fernandina",
    height: 1476,
    location: "Fernandina Island",
    region: "Galápagos",
    imageUrl: "images/fernandhina.webp"
  },
  {
    name: "Sierra Negra",
    height: 1124,
    location: "Isabela Island",
    region: "Galápagos",
    imageUrl: "images/sierra-negra.webp"
  }
]

createVolcanoCard(Volcanoes);

function createVolcanoCard(volcanoesList) {
  const container = document.querySelector("#volcanoContainer");
  if (!container) return;
  container.innerHTML = "";

  volcanoesList.forEach(volcano => {
    let card = document.createElement("section");

    let name = document.createElement("h2");
    name.textContent = volcano.name;

    let location = document.createElement("p");
    location.innerHTML = `<strong>Location:</strong> ${volcano.location}`;

    let height = document.createElement("p");
    height.innerHTML = `<strong>Height:</strong> ${volcano.height} m`;

    let region = document.createElement("p");
    region.innerHTML = `<strong>Region:</strong> ${volcano.region}`;

    let img = document.createElement("img");
    img.setAttribute("src", volcano.imageUrl);
    img.setAttribute("alt", volcano.name);
    img.setAttribute("loading", "lazy");
    img.setAttribute("width", "400");
    img.setAttribute("height", "250");

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(height);
    card.appendChild(region);
    card.appendChild(img);

    container.appendChild(card);
  });
}

/* filter for high, low and regions */

document.addEventListener("DOMContentLoaded", () => {
  const high = document.querySelector("#high");
  const low = document.querySelector("#low");
  const regionFilter = document.querySelector("#regionFilter");

  if (!high || !low || !regionFilter) {
    return;
  }

  high.addEventListener("click", () => {
    const filtered = Volcanoes.filter(v => v.height > 3500);
    createVolcanoCard(filtered);
  });

  low.addEventListener("click", () => {
    const filtered = Volcanoes.filter(v => v.height < 3500);
    createVolcanoCard(filtered);
  });

  regionFilter.addEventListener("change", () => {
    const value = regionFilter.value;
    if (value === "all") {
      createVolcanoCard(Volcanoes);
    } else {
      const filtered = Volcanoes.filter(v => v.region === value);
      createVolcanoCard(filtered);
    }
  });
});

/* ------------- References and Feedback HTML -------------- */
/* Requiered form */
const feedbackForm = document.getElementById("feedback-form");
if (feedbackForm) {
  feedbackForm.addEventListener("submit", function (e) {
    e.preventDefault();

  const rating = document.getElementById("info-rating").value;
  const comments = document.getElementById("feedback").value;
  
  const feedbackData = {
    rating: rating,
    comments: comments,
    date: new Date().toISOString()
  };

  let feedbackList = JSON.parse(localStorage.getItem("volcanoFeedback")) || [];
  feedbackList.push(feedbackData);
  localStorage.setItem("volcanoFeedback", JSON.stringify(feedbackList));

  alert("It has been sent. Thank you for sharing your opinion.");
  this.reset();
  });
}

const contactForm = document.getElementById("contact-form");
if (contactForm) 
  {
    contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const confirmation = document.getElementById("confirmation").value.trim().toLowerCase();

    if (confirmation !== "confirm") {
      alert("Please type 'Confirm' to submit the form.");
      return;
    }

    const contactData = {
      name: name,
      email: email,
      message: message,
      date: new Date().toISOString()
    };

    let contactList = JSON.parse(localStorage.getItem("contactMessages")) || [];
    contactList.push(contactData);
    localStorage.setItem("contactMessages", JSON.stringify(contactList));

    alert("It has been sent. Thank you for sharing your opinion.");
    this.reset();
  });
}