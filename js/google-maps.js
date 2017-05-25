var googKey = require('./../.env').googKey;
var weaKey = require('./../.env').weaKey;

function Map(){
}
function LatLng(lat, lon){
}
function Marker(lat, lon){
}

Map.prototype.getMap = function(city) {
  var map;
  var myCity;
  // var marker;
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + weaKey).then(function(response) {
    var userLatLng = new google.maps.LatLng(response.coord.lat, response.coord.lon);
    myCity = {
      center: userLatLng,
      mapTypeId: 'satellite',
      zoom: 13
    };
    map = new google.maps.Map(document.getElementById('map'), myCity);
    new google.maps.Marker({
      position: userLatLng,
      map: map
    });
  });
};

exports.mapModule = Map;
