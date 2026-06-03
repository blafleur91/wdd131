const today = new Date();
currentyear.innerHTML = `${today.getFullYear()}`;

document.getElementById("lastModified").innerHTML = document.lastModified;

const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
	navigation.classList.toggle("open");
	hamButton.classList.toggle("open");
});

const history = [
  {
    eventName: "First Vision",
    location: "Palmyra, New York, United States",
    date: "1820, Spring",
	description: "A young man named Joseph Smith prays to know which church is true. He then receives a vision of God the Father and Jesus Christ, who tell him none is currently true.",
    imageUrl:
    "images/first-vision.webp"
  },
  {
    eventName: "Angel Visitation",
    location: "Palmyra, New York, United States",
    date: "1823, September, 21",
	description: "Joseph Smith was praying at night and received a visit from an angel named Moroni. This angel told him he would receive and translate a record of ancient America and God's dealings with it.",
    imageUrl:
    "images/moroni-appears.webp"
  },
  {
    eventName: "Golden Plates",
    location: "Palmyra, New York, United States",
    date: "1827, September, 22",
	description: "Joseph Smith is finally permitted to take the record, engraved on golden plates.",
    imageUrl:
    "images/moroni-gives-plates.webp"
  },
  {
    eventName: "Aaronic Priesthood Restored",
    location: "Harmony, Pensylvania, United States",
    date: "1829, May, 15",
	description: "Joseph Smith and his Scribe for translation receive the Aaronic priesthood and the authority to baptize.",
    imageUrl:
    "images/aaronic-priesthood-given.webp"
  },
  {
    eventName: "Book of Mormon Translation Finished",
    location: "Fayette, New York, United States",
    date: "1829, June, 28",
	description: "The Book Of Mormon is finished being translated.",
    imageUrl:
    "images/translation.webp"
  },
  {
    eventName: "Joseph Smith's Death",
    location: "Carthage, Illinois, United States",
    date: "1844, June, 27",
	description: "Joseph Smith, after being falsely imprisoned, is killed in Carthage Jail by a mob.",
    imageUrl:
    "images/martyrdom.webp"
  },
  {
    eventName: "Utah Settled",
    location: "Utah, United States",
    date: "1847, July",
	description: "The next leader of the Church, Brigham Young, settles the territory of Utah after fleeing with the church from continued persecution.",
    imageUrl:
    "images/utah-settling.webp"
  },
  {
    eventName: "Salt Lake Temple Dedication",
    location: "Salt Lake City, Utah, United States",
    date: "1893, April, 6",
	description: "The Salt Lake Temple was finished being built and is dedicated as a working temple.",
    imageUrl: "images/salt-lake-temple.jpg"
  },
  {
    eventName: "Russell M Nelson's death",
    location: "Salt Lake City, Utah, United States",
    date: "2025, September, 27",
	description: "The second most recent Prophet passes on peacefully from this life.",
    imageUrl: "images/russell-m-nelson.webp"
  },
  {
    eventName: "Newest President Sustained",
    location: "Salt Lake City, Utah, United States",
    date: "2025, October, 14",
	description: "President Oaks, a very accomplished man, is appointed and sustained as the newest President of the Church of Jesus Christ of Latter-Day Saints.",
    imageUrl: "images/dallin-h-oaks.webp"
  },
];

const container = document.querySelector(".container")

function createHistoryCard(filteredHistory) {
  document.querySelector(".container").innerHTML = "";
  filteredHistory.forEach(history => {
    const card = document.createElement("section");

    const name = document.createElement("h2");
    name.textContent = history.eventName;

    const location = document.createElement("p");
    location.textContent = `Location: ${history.location}`;

    const date = document.createElement("p");
    date.textContent = `Date: ${history.date}`;

	const description = document.createElement("p");
	description.textContent = history.description;

    const image = document.createElement("img");
    image.src = history.imageUrl;
    image.alt = history.eventName;
    image.loading = "lazy";
    image.width = "250";
    // image.height = "auto";

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(date);
	card.appendChild(description);
    card.appendChild(image);

    container.appendChild(card);
  });
}

createHistoryCard(history);

const allLink = document.querySelector("#all")
const oldLink = document.querySelector("#beginning");
const newLink = document.querySelector("#recent");


// nonutahLink.addEventListener("click", () => {
  // THIS IS AN UNNECESSARY AMOUNT OF CODE, THE CODE ACTUALLY USED SHOULD BE WHAT IS USED.
  // let nonutah = temples.filter(temple => !temple.location.includes("Utah"));
  // createTempleCard(nonutah);
  // createTempleCard(temples.filter(temple => !temple.location.includes("Utah")));
// });

allLink.addEventListener("click", () => {
  createHistoryCard(history);
});

oldLink.addEventListener("click", () => {
  createHistoryCard(history.filter(event => parseInt(event.date) < 1900));
});

newLink.addEventListener("click", () => {
  createHistoryCard(history.filter(event => parseInt(event.date) > 2000))
});