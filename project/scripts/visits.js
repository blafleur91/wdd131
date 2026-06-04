let visitCount = localStorage.getItem("visits");

// if nothing exists yet, start at 0
if (visitCount === null) {
    visitCount = 0;
}

// apparently this will convert it from a string into a number
visitCount = Number(visitCount) + 1;

localStorage.setItem("visits", visitCount);


if (visitCount === 1) {
    document.getElementById("visits").textContent = `Thank you for visiting our website for the first time!`;
} else {
document.getElementById("visits").textContent = `You have visited our homepage ${visitCount} times`;
}