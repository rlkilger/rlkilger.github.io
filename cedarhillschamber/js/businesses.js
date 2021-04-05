fetch("json/businesses.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const businesses = jsonObject["businesses"];
    console.log(businesses);
    
    const cards = document.querySelector(".cards");
    
    for (let i = 0; i < businesses.length; i++ ) {
      let div = document.createElement("div");
      let logo = document.createElement("a");
      let spanDiv = document.createElement("div");
      let image = document.createElement("img");
      let address = document.createElement("span");
      let phone = document.createElement("span");
      let anchor = document.createElement("a");
      let hours = document.createElement("span");
      let email = document.createElement("span");
      let webAnchor = document.createElement("a");
      let website = document.createElement("span");

      div.setAttribute("class", `card`);

      if (businesses[i].imageurl != undefined) {
        logo.setAttribute("class", `img-div`);
        logo.setAttribute("href", `${businesses[i].website}`)
        logo.setAttribute("target", `_blank`);
        image.setAttribute("src", businesses[i].imageurl);
        image.setAttribute("alt", `${businesses[i].name}` + " logo");
      } else {
        logo.innerHTML = "<h4>" + `${businesses[i].name}` + "</h4>";
      }

      spanDiv.setAttribute("class", `span-div`);
      address.innerHTML = `${businesses[i].address}`;
      
      anchor.setAttribute("href", `tel:${businesses[i].href}`)
      anchor.innerHTML = `${businesses[i].phone}`;

      if (businesses[i].email != undefined) {
        webAnchor.setAttribute("href", `mailto:${businesses[i].email}`)
        webAnchor.innerHTML = `${businesses[i].email}`;
      }

      website.innerHTML = `${businesses[i].website}`;
      


      logo.append(image);
      div.append(logo);
      spanDiv.append(address);
      phone.append(anchor)
      spanDiv.append(phone);
      spanDiv.append(hours);
      email.append(webAnchor);
      spanDiv.append(email);
      spanDiv.append(website);
      div.append(spanDiv);
      cards.append(div);
    };
  });