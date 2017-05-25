var weaKey = require('./../.env').weaKey;

function Weather(){
}

Weather.prototype.getWeather = function(city, displayWeather) {
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + weaKey).then(function(response) {
    var temperature = 1.8 * (response.main.temp) - 459.67;
    displayWeather(city, response.main.humidity, response.wind.speed, parseInt(temperature));
  }).fail(function(error) {
    $('.showWeather').text(error.responseJSON.message);
  });
}

exports.weatherModule = Weather;
