const weatherapiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=40.422312&lon=-111.76379&units=imperial&exclude=minutely,hourly&appid=070bcaa0336766a1faa1048ce4e2a875";

fetch(weatherapiURL)
  .then((response) =>
    response.json())
  .then((jsObject) => {
    //console.log(jsObject);

    const current = Math.round(jsObject.current.temp);
    const desc = jsObject.current.weather[0].main;
    const humidity = Math.round(jsObject.current.humidity);

    document.getElementById("temp").textContent = current;
    document.getElementById("currently").textContent = desc;
    document.getElementById("humidity").textContent = humidity;

    let count = 1;
    const dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    for (let i = 0; count <= 3; i++) {
      let obj = jsObject.daily[i];
      
      let date = new Date();
      let day = date.getDay();

      let temp = Math.round(obj.temp.day);

      document.getElementById(`day${count}`).textContent = dayOfWeek[(day + count)];
      document.getElementById(`day${count}-temp`).textContent = temp;
      count++;
    }


    if (jsObject.alerts != undefined) {
      let alert = `${jsObject.alerts.event} - ${jsObject.alerts.start}-${jsObject.alerts.end} - ${jsObject.alerts.description}`;


      let close_span = document.createElement("span");
      close_span.setAttribute("class", `close`);
      close_span.setAttribute("onclick", `this.parentElement.style.display="none";`);
      close_span.innerHTML = "&times;";

      let alert_span = document.createElement("span");
      alert_span.innerHTML = `${alert}`;

      let div = document.createElement("div");
      div.setAttribute("class", `alert`);
      div.innerHTML = `${close_span}${alert_span}`;

      document.getElementById("alert-span").innerHTML = `${div}`;
    }

  });


  