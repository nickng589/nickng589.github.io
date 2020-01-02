var i = 0;
var txt = 'Lorem ipsum dummy text blabla.';
var speed = 50;
var deleting = false;

function typeWriter() {
  /*
  if (i < txt.length) {
    document.getElementById("skills").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
  */
  var typeEffect = setInterval(function () {
    console.log("repeat");
    if(i < txt.length){
      document.getElementById("skills").innerHTML += txt.charAt(i);
      i++;
    } else {
      console.log("start delete");
      deleteLetters(document.getElementById("skills"));
    }
  }, 50);
}

function deleteLetters(element){
  var length = element.innerHTML.length;
  var deleteEffect = setInterval(function() {
    if (length > 0){
      element.innerHTML = element.innerHTML.substring(0, length -1);
    } else {
      clearInterval(deleteEffect);
      i = 0;
      console.log('delete');
    }
  }, 50);
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
