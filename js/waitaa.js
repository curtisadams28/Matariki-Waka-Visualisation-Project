var moon = SunCalc.getMoonIllumination(new Date());
var moonphase = moon.fraction;

if (moonphase > 0.5) {
  var monorm = normalise(moonphase, 1, 0.5) * 50;
  console.log(monorm);

  document.getElementById('moonellipse').setAttribute('rx', monorm);
  document.getElementById('moonellipse').style.fill = ('#f4f8ff');
}
if (moonphase < 0.5) {
  var monorm1 = (1 - normalise(moonphase, 0.5, 0)) * 50;
  console.log(monorm);

  document.getElementById('moonellipse').setAttribute('rx', monorm1);
  document.getElementById('moonellipse').style.fill = ('#354260');

}
if (moonphase == 0.5) {
  document.getElementById('moonellipse').setAttribute('rx', 0);
}
