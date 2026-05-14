const today = new Date();
currentyear.innerHTML = `${today.getFullYear()}`;

document.getElementById("lastModified").innerHTML = document.lastModified;

let temperature = 74;
document.getElementById("temperature").textContent = `${temperature} °F`;

let windSpeed = 10;
document.getElementById("wind-speed").textContent = `${windSpeed} mph`;

let windChill = "N/A";

const calculateWindChill = (temp, speed) => Math.round(35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16));


if (temperature <= 50 && windSpeed > 3) {
    windChill = calculateWindChill(temperature, windSpeed);
}

document.getElementById("wind-chill").textContent = windChill;