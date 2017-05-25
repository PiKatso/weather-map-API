var Weather = require('./../js/weather.js').weatherModule;

var displayWeather = function(city, humidityData, windSpeedData, temperatureData) {

  $('.showWeather').html("The humidity in " + city + " is <span class='red'>" + humidityData + "%</span>.<br> The wind speed is <span class='red'>" + windSpeedData + "mph</span>.<br> The temperature is <span class='red'>" + temperatureData + "°F</span>.");
};

$(document).ready(function(){
  var currentWeatherObject = new Weather();
  $('#find-city').click(function(){
    var city = $('#city').val();
    currentWeatherObject.getWeather(city, displayWeather);
  });
});
