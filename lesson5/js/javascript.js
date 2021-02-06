function toggleMenu() {
  document.getElementById("navigation").classList.toggle("hide");
}

function lastModified() {
  var dayOfWeek = new Date().toLocaleString('default', {weekday: 'long'});
  var day = new Date().getDate();
  var month = new Date().toLocaleString('default', {month: 'long'});
  var year = new Date().getFullYear();
  document.getElementById("currentDate").innerHTML = dayOfWeek + ", " + day + " " + month + " " + year;
}

function displayPancakeBanner() {
  var parent = document.getElementById("body");
  var child = document.getElementById("pancake-banner");
  var dayOfWeek = new Date().getDay();
  if (dayOfWeek != "5") {
    parent.removeChild(child);
  }
}

lastModified();
displayPancakeBanner();