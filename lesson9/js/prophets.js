const requestURL = "https://byui-cit230.github.io/canvas-referenced/latter-day-prophets.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const prophets = jsonObject["prophets"];
    
    const cards = document.querySelector(".cards");
    
    for (let i = 0; i < prophets.length; i++ ) {
      let card = document.createElement("section");
      let h2 = document.createElement("h2");
      let birthDate = document.createElement("p");
      let birthPlace = document.createElement("p");
      let image = document.createElement("img");

      h2.innerHTML = `${prophets[i].name} ${prophets[i].lastname}`;
      birthDate.innerHTML = `Date of Birth: ${prophets[i].birthdate}`;
      birthPlace.innerHTML = `Place of Birth: ${prophets[i].birthplace}`;
      image.setAttribute("src", prophets[i].imageurl)
      image.setAttribute("alt", `${prophets[i].name} ${prophets[i].lastname} - ${i + 1}`)

      card.append(h2);
      card.append(birthDate);
      card.append(birthPlace);
      card.append(image);
      cards.append(card);
    };
  });