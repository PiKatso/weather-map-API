var weaKey = require('./../.env').apiKey;

function Weather(){
}

Weather.prototype.getWeather = function(city){
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey) .then(function(response) {
    displayWeather(city);
  }).fail(function(error) {
    $('.displayWeather').text(error.responseJSON.message);
  });
};

exports.weatherModule = Weather;
