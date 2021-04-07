fetch("json/businesses.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const businesses = jsonObject["businesses"];
    
    const cards = document.querySelector("#cards");
    
    for (let i = 0; i < businesses.length; i++ ) {
      let div = document.createElement("div");
      let image = document.createElement("img");
      let logoAnchor = document.createElement("a");
      let imgDiv = document.createElement("div");
      let spanDiv = document.createElement("div");
      let address = document.createElement("span");
      let phone = document.createElement("span");
      let email = document.createElement("span");
      let website = document.createElement("span");
      let webAnchor = document.createElement("a");

      div.setAttribute("class", `card grid-card`);
      imgDiv.setAttribute("class", `img-div`);

      if (businesses[i].imageurl != undefined) {
        logoAnchor.setAttribute("class", `img-div`);
        logoAnchor.setAttribute("href", `${businesses[i].web}`)
        logoAnchor.setAttribute("target", `_blank`);
        image.setAttribute("src", businesses[i].imageurl);
        image.setAttribute("alt", `${businesses[i].name}` + " logo");
        logoAnchor.append(image);
      } else {
        logoAnchor.innerHTML = "<h4>" + `${businesses[i].name}` + "</h4>";
      }

      spanDiv.setAttribute("class", `span-div`);
      address.innerHTML = `${businesses[i].address}`;
      phone.innerHTML = `${businesses[i].phone}`;

      if (businesses[i].email != undefined) {
        email.innerHTML = `${businesses[i].email}`;
      }

      webAnchor.setAttribute("href", `mailto:${businesses[i].web}`)
      website.innerHTML = `${businesses[i].website}`;
      

      div.append(imgDiv);
      imgDiv.append(logoAnchor);
      spanDiv.append(address);
      spanDiv.append(phone);
      spanDiv.append(email);
      webAnchor.append(website);
      spanDiv.append(webAnchor);
      div.append(spanDiv);
      cards.append(div);
    };
  });