const today = new Date();
currentyear.innerHTML = `${today.getFullYear()}`;

document.getElementById("lastModified").innerHTML = document.lastModified;

let temperature = 74;
document.getElementById("temperature").textContent = `${temperature} °F`;

let windSpeed = 10;
document.getElementById("wind-speed").textContent = `${windSpeed} mph`;