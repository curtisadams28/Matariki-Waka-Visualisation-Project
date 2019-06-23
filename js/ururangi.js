console.log('helloworld');
/*
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext("2d");

var img = new Image();
img.onload = function() {
    ctx.drawImage(img, 0, 0);
}
img.src = "/img/wind2.svg";
*/
/* Weather api */
var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL
request.open('GET', 'http://api.openweathermap.org/data/2.5/weather/?q=Hamilton,nz&APPID=66270021d734944e5d422a0b3cd60253', true)

request.onload = function () {
  // Begin accessing JSON data here
    var data = JSON.parse(this.response);
    console.log(data);

    // processes the wind data for the delaylength and animation duration properties
    var winddata = data.wind.speed;
    var windspeedh = 1 - (normalise(winddata, 22, 0));
    var animduration = windspeedh * 20;
    var windfrequency = (windspeedh * 50);
    console.log('speed: ' + windspeedh);
    console.log('freq: ' + windfrequency);
    //var windspeed = 20;

    var numid = 1;
    // Iterates through each path and sets the css properties
    for (var i = 0; i < 31; i++) {
      var idquery = "svg_" + numid;
      idquery = idquery.toString();
      var delaylength = Math.random() * windfrequency;

      document.getElementById(idquery).setAttribute("stroke", "#fff");
      //document.getElementById(idquery).setAttribute("animationDelay", "10s");
      document.getElementById(idquery).style.animationDelay = delaylength + "s";
      document.getElementById(idquery).style.animationDuration = animduration + "s";
      numid++;
    }
}


// Send request
request.send();
