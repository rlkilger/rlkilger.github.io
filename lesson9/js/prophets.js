const requestURL = "https://byui-cit230.github.io/canvas-referenced/latter-day-prophets.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const prophets = jsonObject["prophets"];
    
    const cards = document.querySelector(".cards")
    
    prophets.forEach(prophet => {
      let card = document.createElement("section");
      let h2 = document.createElement("h2");
      let birthDate = document.createElement("p");
      let birthPlace = document.createElement("p");
      let image = document.createElement("img");

      h2.innerHTML = `${prophet.name} ${prophet.lastname}`;
      birthDate.innerHTML = `Date of Birth: ${prophet.birthdate}`;
      birthPlace.innerHTML = `Place of Birth: ${prophet.birthplace}`;
      image.setAttribute("src", prophet.imageurl)
      image.setAttribute("alt", `Photo of ${prophet.name} ${prophet.lastname}`)

      card.append(h2);
      card.append(birthDate);
      card.append(birthPlace);
      card.append(image);
      cards.append(card);
    });
  });