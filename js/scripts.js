var i = 0;
var typeSpeed = 100;
var blinkSpeed = 300;
var blinkCount = 5;
var skills = ["first", "second", "third"];
var index = 0;
var counter = 0;

function write(){
  var txt = skills[index];
  if (i < txt.length) {
    document.getElementById("skills").innerHTML += txt.charAt(i);
    i++;
    setTimeout(write, typeSpeed);
  } else {
    i = 0;
    setTimeout(blink, blinkSpeed);
  }
}

function blink(){
  if(counter < blinkCount){
    if(blinker.style.opacity == 1){
      blinker.style.opacity = 0;
    } else {
      blinker.style.opacity = 1;
      counter += 1;
    }
    setTimeout(blink, blinkSpeed);
  } else {
    counter = 0;
    setTimeout(del, typeSpeed);
  }
}

function del(){
  var element = document.getElementById("skills");
  element.innerHTML = element.innerHTML.substring(0, element.innerHTML.length -1);
  if(element.innerHTML.length <= 0){
    setTimeout(write, 100);
    index = (index + 1) % skills.length;
  } else {
    setTimeout(del, typeSpeed);
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
    }, 75);
}

window.onload = function(){
  write();
  fadeIn(document.getElementById("name"));
};
