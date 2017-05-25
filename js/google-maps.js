var googKey = require('./../.env').googKey;
var weaKey = require('./../.env').weaKey;
var mapsapi = require('google-maps-api')(googKey);

function Map(){
}

function LatLng(lat, lon){
}

Map.prototype.getMap = function(city) {
  var map;
  function getLocation(city) {
    // var result = []
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + weaKey).then(function(response) {
      var userLatLng = new google.maps.LatLng(response.coord.lat, response.coord.lon);
      // var cityLat = response.coord.lat;
      // result.push(cityLat);
      // var cityLon = response.coord.lon;
      // result.push(cityLon);
      var myCity = {
        center: userLatLng,
        zoom: 15
      };
    });
  }
  mapsapi().then( function( maps ) {
    map = new google.maps.Map(document.getElementById('map'), myCity);
  });
};

exports.mapModule = Map;
