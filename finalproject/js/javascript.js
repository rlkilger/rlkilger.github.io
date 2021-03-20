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