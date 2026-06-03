let reviewCount = localStorage.getItem("reviews");

// if nothing exists yet, start at 0
if (reviewCount === null) {
    reviewCount = 0;
}

// apparently this will convert it from a string into a number
reviewCount = Number(reviewCount) + 1;

localStorage.setItem("reviews", reviewCount);

document.getElementById("reviewCount").textContent = reviewCount;