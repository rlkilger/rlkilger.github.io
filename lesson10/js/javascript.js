//Hamburger menu
function toggleMenu() {
  document.getElementById("navigation").classList.toggle("hide");
}

//Storm severity rating
function adjustRating(severity) {
  document.getElementById("rating").innerHTML = severity;
}