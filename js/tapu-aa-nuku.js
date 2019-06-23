var date = new Date();
var time = date.getHours();
console.log(time);
var tnight;

if (time >= 6 && time < 18) {
  tsetDay();
}
else {
  tsetNight();
}

function tsetNight() {
  // Add nightime elements
  document.getElementById('nocturnal').style.display = 'initial';
  document.getElementById('tapu-aa-nuku1').style.backgroundImage = 'linear-gradient(#0D1717, #000000)';
  tnight = true;
}

function tsetDay() {
  // Add nightime elements
  document.getElementById('nocturnal').style.display = 'none';
  tnight = false;
  document.getElementById('tapu-aa-nuku1').style.backgroundImage = 'linear-gradient(#a8a879, #E2E2B5)';
}

function tapuaanukuClick() {
  if (tnight == false) {
    tsetNight();
  }
  else {
    tsetDay();
  }
}
