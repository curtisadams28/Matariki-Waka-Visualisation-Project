var data = {
  "particles": {
    "number": {
      "value": 2000,
      "density": {
        "enable": true,
        "value_area": 1972.8691040806818
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "image",
      "stroke": {
        "width": 1,
        "color": "#000000"
      },
      "image": {
        "src": "/img/rain13.png",
        "width": 1,
        "height": 2
      }
    },
    "opacity": {
      "value": 1,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.007992007992007992,
        "sync": false
      }
    },
    "size": {
      "value": 23.67442924896818,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 46.288401101176675,
        "size_min": 10.38961038961039,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 50,
      "direction": "bottom",
      "random": false,
      "straight": true,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 0,
        "rotateY": 0
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "repulse"
      },
      "onclick": {
        "enable": false,
        "mode": "repulse"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": false
}

var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL
request.open('GET', 'https://api.openweathermap.org/data/2.5/weather/?q=Hamilton,nz&APPID=66270021d734944e5d422a0b3cd60253', true);

request.onload = function () {
  // Begin accessing JSON data here
    var weatherdata = JSON.parse(this.response);
    if (weatherdata.rain == undefined) {
      console.log('No Rain Data');
    }
    else {
      var rainfall = weatherdata["rain"]["3h"];
      var rainrate = normalise(rainfall, 100, 0) * 2000;
      data.particles.number.value = rainrate;
      particlesJS('particles-js', data, function() {
        console.log('particles.json loaded...');
      });
    }
}
request.send();
