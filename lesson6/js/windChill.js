let temp = parseInt(document.getElementById("temp").innerHTML);
let windSpeed = parseInt(document.getElementById("windSpeed").innerHTML);
let result = "N/A";
if ((temp < 50) && (windSpeed > 3)) {
  result = (Math.round(35.74 + 0.6215 * temp - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temp * Math.pow(windSpeed, 0.16))) + "&#176;";
}
document.getElementById("windChill").innerHTML = result;