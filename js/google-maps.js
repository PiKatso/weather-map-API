var googKey = require('./../.env').googKey;
var weaKey = require('./../.env').weaKey;

function Map(){
}

function LatLng(lat, lon){
}

Map.prototype.getMap = function(city) {
  var map;
  var myCity;
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + weaKey).then(function(response) {
    var userLatLng = new google.maps.LatLng(response.coord.lat, response.coord.lon);
    myCity = {
      center: userLatLng,
      zoom: 13
    };
    map = new google.maps.Map(document.getElementById('map'), myCity);
  });
};

exports.mapModule = Map;
