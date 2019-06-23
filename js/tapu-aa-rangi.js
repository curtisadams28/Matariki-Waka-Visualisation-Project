var date = new Date();
var time = date.getHours();
console.log(time);
var night;
/*
var sun = document.createElement("IMG");
sun.setAttribute("src", "img/tapu-aa-rangi/tree.svg");
sun.setAttribute("class", "scene");
*/

if (time >= 6 && time < 18) {
  setDay();
}
else {
  setNight();
}
//document.getElementsByClassName('tapu-aa-rangi').style.backgroundColor = 'red';

function setDay() {
  // Add daytime elements
  document.getElementById('sun').style.display = 'initial';
  document.getElementById('daytime').style.display = 'initial';

  // remove nightime elements
  document.getElementById('moon').style.display = 'none';
  document.getElementById('night').style.display = 'none';

  document.getElementById('rangi').style.backgroundImage = 'linear-gradient(#c6d838, #48992d)';
  night = false;
}

function setNight() {
  // Remove daytime elements
  document.getElementById('sun').style.display = 'none';
  document.getElementById('daytime').style.display = 'none';

  // Add nightime elements
  document.getElementById('moon').style.display = 'initial';
  document.getElementById('night').style.display = 'initial';

  document.getElementById('rangi').style.backgroundImage = 'linear-gradient(#111028, #2F71B8)';
  night = true;
}

function moonClick() {
  if (night == false) {
    setNight();
  }
  else {
    setDay();
  }
}
