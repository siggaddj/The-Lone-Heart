var i = 0;
var txt = "The Lone Heart"

var speed = 200;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("title").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
window.addEventListener('load', typeWriter)