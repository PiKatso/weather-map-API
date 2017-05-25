var Weather = require('./../js/weather.js').weatherModule;

var displayWeather = function(city, humidityData, windSpeedData, temperatureData) {

  $('.showWeather').text("The humidity in " + city + " is " + humidityData + "%. The wind speed is " + windSpeedData + "mph. The temperature is " + temperatureData + " degrees fahrenheit.");
}

$(document).ready(function(){
  var currentWeatherObject = new Weather();
  $('#find-weather').click(function(){
    var city = $('#city').val();
    currentWeatherObject.getWeather(city, displayWeather);
  });
});
