const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const towns = jsonObject["towns"];
    
    const sections = document.querySelector(".sections-div");
    
    towns.forEach(town => {
      if (town.name == "Fish Haven" || town.name == "Preston" || town.name == "Soda Springs") {
        let section = document.createElement("section");
        let infoDiv = document.createElement("div");
        let name = document.createElement("h2");
        let motto = document.createElement("p");
        let year = document.createElement("p");
        let pop = document.createElement("p");
        let rain = document.createElement("p");
        let image = document.createElement("img");

        infoDiv.setAttribute("class", `info-div`);
        name.innerHTML = `${town.name}`;
        motto.innerHTML = `${town.motto}`;
        motto.setAttribute("class", `town-motto`);
        year.innerHTML = `Year Founded: ${town.yearFounded}`;
        pop.innerHTML = `Population: ${town.currentPopulation}`;
        rain.innerHTML = `Anual Rain Fall: ${town.averageRainfall}`;
        image.setAttribute("src", `images/${town.photo}`);
        image.setAttribute("alt", `Photo of ${town.name}`);

        section.append(infoDiv);
        infoDiv.append(name);
        infoDiv.append(motto);
        infoDiv.append(year);
        infoDiv.append(pop);
        infoDiv.append(rain);
        section.append(image);
        sections.append(section);
    }
    });
  });