const today = new Date();
currentyear.innerHTML = `${today.getFullYear()}`;

document.getElementById("lastModified").innerHTML = document.lastModified;




const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

function populateList(products) {

    const productSelect = document.getElementById("product");

    // Ok, so I was able to figure out I needed to do the foreach loop, but I had to ask chatGPT what it was I was supposed to be doing.
    // I will note, that although I did need its help, I would have been able to get about halfway there on my own.
    // I will now be leaving notes on what each piece does.

    products.forEach(product => {
        
        // this creates an option element to be populated
        const option = document.createElement("option");

        // this populates the text of the option element with the name from the product.
        option.textContent = product.name;

        // this sets the value attribute to the product id.
        option.value = product.id;

        // this takes a variable made for the select part of the form. it then appends the option that was made.
        productSelect.appendChild(option);

    });
}

populateList(products);

// for the local storage requirement, I am super confused. However, I think this is the correct way to do it?
// I commented out some segments that are unnecessary.

// let reviewCount = localStorage.getItem("reviews");

// if nothing exists yet, start at 0
if (reviewCount === null) {
    reviewCount = 0;
}

// apparently this will convert it from a string into a number
reviewCount = Number(reviewCount) + 1;

localStorage.setItem("reviews", reviewCount);

// document.getElementById("reviewCount").textContent = reviewCount;