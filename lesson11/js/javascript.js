//Hamburger menu
function toggleMenu() {
  document.getElementById("navigation").classList.toggle("hide");
}


//Display today's date
function today() {
  let dayOfWeek = new Date().toLocaleString('default', {weekday: 'long'});
  let day = new Date().getDate();
  let month = new Date().toLocaleString('default', {month: 'long'});
  let year = new Date().getFullYear();
  document.getElementById("currentDate").innerHTML = `${dayOfWeek}, ${day} ${month} ${year}`;
}

today();


//Storm severity rating
function adjustRating(severity) {
  document.getElementById("rating").innerHTML = severity;
}