function toggleMenu() {
  document.getElementById("navigation").classList.toggle("hide")
}

function lastModified() {
  var now = new Date();
  var dayOfWeek = new Date().toLocaleString('default', {weekday: 'long'});
  var day = new Date().getDate();
  var month = new Date().toLocaleString('default', {month: 'long'});
  var year = new Date().getFullYear();
  document.getElementById("currentDate").innerHTML = dayOfWeek + ", " + day + " " + month + " " + year;
}

lastModified();