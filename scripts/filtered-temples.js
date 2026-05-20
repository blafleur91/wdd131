const today = new Date();
currentyear.innerHTML = `${today.getFullYear()}`;

document.getElementById("lastModified").innerHTML = document.lastModified;

const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
	navigation.classList.toggle("open");
	hamButton.classList.toggle("open");
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
    templeName: "Bountiful Utah Temple",
    location: "Bountiful, Utah, United States",
    dedicated: "1995, January, 8",
    area: 104000,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/bountiful-utah/400x250/bountiful-temple-766347-wallpaper.jpg"
  },
  {
    templeName: "Ogden Utah Temple",
    location: "Ogden, Utah, United States",
    dedicated: "1972, January, 18",
    area: 112232,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/ogden-utah/400x250/ogden-utah-temple-1300442-wallpaper.jpg"
  },
  {
    templeName: "Mount Timpanogos Utah Temple",
    location: "American Fork, Utah, United States",
    dedicated: "1996, October, 13",
    area: 107240,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mount-timpanogos-utah/400x250/mount-timpanogos-temple-lds-994445-wallpaper.jpg"
  },
  // Add more temple objects here...
];

const container = document.querySelector(".container")

function createTempleCard(filteredTemples) {
  document.querySelector(".container").innerHTML = "";
  filteredTemples.forEach(temple => {
    const card = document.createElement("section");

    const name = document.createElement("h2");
    name.textContent = temple.templeName;

    const location = document.createElement("p");
    location.textContent = `Location: ${temple.location}`;

    const dedicated = document.createElement("p");
    dedicated.textContent = `Dedicated: ${temple.dedicated}`;

    const size = document.createElement("p");
    size.textContent = `Size: ${temple.area.toLocaleString()} sq ft`;

    const image = document.createElement("img");
    image.src = temple.imageUrl;
    image.alt = temple.templeName;
    image.loading = "lazy";
    image.width = "250";
    // image.height = "auto";

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedicated);
    card.appendChild(size);
    card.appendChild(image);

    container.appendChild(card);
  });
}

createTempleCard(temples);


const homeLink = document.querySelector("#home");
const oldLink = document.querySelector("#old");
const newLink = document.querySelector("#new");
const largeLink = document.querySelector("#large");
const smallLink = document.querySelector("#small");

// nonutahLink.addEventListener("click", () => {
  // THIS IS AN UNNECESSARY AMOUNT OF CODE, THE CODE ACTUALLY USED SHOULD BE WHAT IS USED.
  // let nonutah = temples.filter(temple => !temple.location.includes("Utah"));
  // createTempleCard(nonutah);
  // createTempleCard(temples.filter(temple => !temple.location.includes("Utah")));
// });

homeLink.addEventListener("click", () => {
  createTempleCard(temples);
});

oldLink.addEventListener("click", () => {
  createTempleCard(temples.filter(temple => parseInt(temple.dedicated) < 1900));
});

newLink.addEventListener("click", () => {
  createTempleCard(temples.filter(temple => parseInt(temple.dedicated) > 2000))
});

largeLink.addEventListener("click", () => {
  createTempleCard(temples.filter(temple => temple.area > 90000))
});

smallLink.addEventListener("click", () => {
  createTempleCard(temples.filter(temple => temple.area < 10000))
});



//  this is the example for the assignment they may or may not have meant to show, so I am going to put it in here as a comment so I know another way to to the above loop.
// 
// function createTempleCard() {
//  temples.forEach(temple => {
//  let card = document.createElement("section");
//  let name = document.createElement("h3"); 
//  let location = document.createElement("p"); 
//  let dedication = document.createElement("p"); 
//  let area = document.createElement("p"); 
//  let img = document.createElement("img"); 
// 
//  name.textContent = temple.templeName;
//  location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
//  dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
//  area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
//  img.setAttribute("src", temple.imageUrl);
//  img.setAttribute("alt", `${temple.templeName} Temple`);
//  img.setAttribute("loading", "lazy");
//
//  card.appendChild(name);
//  card.appendChild(location);
//  card.appendChild(dedication);
//  card.appendChild(area);
//  card.appendChild(img);
// 
//  document.querySelector(".res-gird").appendChild(card);
// 
// });
// }
