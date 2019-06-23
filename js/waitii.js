var request = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL
request.open('GET', 'https://matarikiwaka-functions.azurewebsites.net/api/waka/current', true);

request.onload = function () {
  var data = JSON.parse(this.response);
  var river = data.telemetry[9].value;
  console.log(river);
  var riverlevel = normalise(river, 15, 5) * 4.5;
  document.getElementById('water-level').style.height = riverlevel + 'vw';
}
request.send();
