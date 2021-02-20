function toggleMenu() {
  document.getElementById("navigation").classList.toggle("hide");
}

function lastModified() {
  let dayOfWeek = new Date().toLocaleString('default', {weekday: 'long'});
  let day = new Date().getDate();
  let month = new Date().toLocaleString('default', {month: 'long'});
  let year = new Date().getFullYear();
  document.getElementById("currentDate").innerHTML = `${dayOfWeek}, ${day} ${month} ${year}`;
}

lastModified();


