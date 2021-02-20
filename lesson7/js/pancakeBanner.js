let parent = document.getElementById("body");
let child = document.getElementById("pancake-banner");
let dayOfWeek = new Date().getDay();
if (dayOfWeek != "5") {
  parent.removeChild(child);
}