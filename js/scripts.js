var i = 0;
var typeSpeed = 50;
var blinkSpeed = 200;
var blinkCount = 1;
var skills = ["Software Engineer", "Data Scientist", "Educator", "Website Designer", "Game Designer", "Matcha Enthusiast"];
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
    index = (index + 1) % skills.length;
    setTimeout(function(){blink(2, del)}, blinkSpeed);
  }
}

function blink(blinkCount, nextAni){
  if(blinkCount != 0){
    if(blinker.style.opacity == 1){
      blinker.style.opacity = 0;
      setTimeout(function(){blink(blinkCount, nextAni)}, blinkSpeed);
    } else {
      blinker.style.opacity = 1;
      setTimeout(function(){blink(blinkCount - 1, nextAni)}, blinkSpeed);
    }
  } else {
    setTimeout(nextAni, typeSpeed);
  }
}

function del(){
  var element = document.getElementById("skills");
  element.innerHTML = element.innerHTML.substring(0, element.innerHTML.length -1);
  if(element.innerHTML.length <= 0){
    setTimeout(blink(blinkCount, write), 100);
  } else {
    setTimeout(del, typeSpeed);
  }
}

function fadeIn(fadeTarget, speed, interval) {
  fadeTarget.style.opacity = 0;
    var fadeEffect = setInterval(function () {
        if (fadeTarget.style.opacity < 1) {
            fadeTarget.style.opacity = parseFloat(fadeTarget.style.opacity) + interval;
        } else {
            clearInterval(fadeEffect);
        }
    }, speed);
}

window.onload = function(){
  blink(1, write);
  fadeIn(document.getElementsByTagName("BODY")[0], 37, .05);
};
