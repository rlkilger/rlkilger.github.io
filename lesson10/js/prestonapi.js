const weatherapiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=070bcaa0336766a1faa1048ce4e2a875";
const forecastapiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=070bcaa0336766a1faa1048ce4e2a875";



fetch(weatherapiURL)
  .then((response) =>
    response.json())
  .then((jsObject) => {
    //console.log(jsObject);

    const current = Math.round(jsObject.main.temp);
    const high = Math.round(jsObject.main.temp_max);
    const low = Math.round(jsObject.main.temp_min);
    const windSpeed = Math.round(jsObject.wind.speed);

    //Calculate wind direction
    const array = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
    const windDir = array[Math.ceil((jsObject.wind.deg % 360) / 22.5)];

    const humidity = Math.round(jsObject.main.humidity);
    const imagesrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    const desc = jsObject.weather[0].description;

    //Calculate wind chill
    let result = "N/A";
    if ((current < 50) && (windSpeed > 3)) {
      result = (Math.round(35.74 + 0.6215 * current - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * current * Math.pow(windSpeed, 0.16))) + "&#176;F";
    }

    document.getElementById("temp").textContent = current;
    document.getElementById("currently").textContent = desc;
    document.getElementById("high").textContent = high;
    document.getElementById("low").textContent = low;
    document.getElementById("windSpeed").textContent = windSpeed;
    document.getElementById("windDir").textContent = windDir;
    document.getElementById("humidity").textContent = humidity;
    document.getElementById("temp-img").setAttribute('src', imagesrc);
    document.getElementById("temp-img").setAttribute('alt', desc);
    document.getElementById("windChill").innerHTML = result;
  });


fetch(forecastapiURL)
  .then((response) =>
    response.json())
  .then((jsObject) => {
    //console.log(jsObject);

    let count = 0;
    const dayOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    
    for (let i = 0; count < 5; i++) {
      let obj = jsObject.list[i];
      if (obj.dt_txt.includes("18:00:00")) {
        count++;

        //Calculate day of week
        let date = new Date(obj.dt_txt);
        let day = date.getDay();

        let temp = Math.round(obj.main.temp);
        let imagesrc = `https://openweathermap.org/img/w/${obj.weather[0].icon}.png`;
        let desc = obj.weather[0].description;

        document.getElementById(`day${count}`).textContent = dayOfWeek[day];
        document.getElementById(`day${count}Temp`).textContent = temp;
        document.getElementById(`img${count}`).setAttribute('src', imagesrc);
        document.getElementById(`img${count}`).setAttribute('alt', desc);
      }
    }
});
