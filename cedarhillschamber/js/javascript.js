//Hamburger menu
function toggleMenu() {
  document.getElementById("navigation").classList.toggle("hide");
}


//Display date last modified
function lastModified() {
  document.getElementById("lastMod").innerHTML = document.lastModified;
  document.getElementById("year").innerHTML = new Date().getFullYear();
}
lastModified();


//Display grid
function displayGrid() {
  document.getElementById("cards").classList.add("grid");
  document.getElementById("cards").classList.remove("list");
}

//Display list
function displayList() {
  document.getElementById("cards").classList.add("list");
  document.getElementById("cards").classList.remove("grid");
}

