console.log('matarikistars');

var starsvg = document.getElementById('matarikistars');
console.log(starsvg);

var request = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL
request.open('GET', 'https://matarikiwaka-functions.azurewebsites.net/api/waka/current', true);

request.onload = function () {
  var data = JSON.parse(this.response);
  var pedestrian = data.telemetry[3].value;
  console.log(pedestrian);
  var starnumber = pedestrian * 30;
  for (var i = 0; i < starnumber; i++) {
    var randx = Math.random() * window.innerWidth;
    var randy = Math.random() * window.innerHeight;
    var randanim = Math.random() * 2;
    var radius = (Math.random() + 0.5) * 2;
    var cir1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    cir1.setAttribute("cx", randx);
    cir1.setAttribute("cy", randy);
    cir1.setAttribute("r", radius);
    cir1.setAttribute("fill", "white");
    cir1.setAttribute("class", "randstars");
    starsvg.appendChild(cir1);
    cir1.style.animationDelay = randanim + 's';
    console.log(pedestrian);
  }
}
request.send();
