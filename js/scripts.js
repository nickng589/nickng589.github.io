var i = 0;
var txt = 'Lorem ipsum dummy text blabla.';
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

function fadeIn(fadeTarget) {
  fadeTarget.style.opacity = 0;
    var fadeEffect = setInterval(function () {
        if (fadeTarget.style.opacity < 1) {
            fadeTarget.style.opacity = parseFloat(fadeTarget.style.opacity) + 0.1;
        } else {
            clearInterval(fadeEffect);
        }
    }, 50);
}

window.onload = function(){
  typeWriter();
  fadeIn(document.getElementById("name"));
};
