const requestURL = "";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const businesses = jsonObject["businesses"];
    console.log(businesses);
    
    const cards = document.querySelector(".cards");
    
    for (let i = 0; i < 1; i++ ) {
      let image = document.createElement("img");

      image.setAttribute("src", businesses[i].imageurl)
      image.setAttribute("alt", `${businesses[i].name}`)

      cards.append(image);
    };
  });