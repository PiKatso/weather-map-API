var Weather = require('./../js/weather.js').weatherModule;

var displayWeather = function(city, humidityData, windSpeedData, temperatureData) {

  // var firstLetter = city.replace(/\B[a-z]/g, "");
  // console.log(firstLetter);

  // var lastLetters = city.replace(/\b[a-z]/g, "");
  // console.log(lastLetters);

  $('.showWeather').html("The humidity in " + city + " is <span class='red'>" + humidityData + "%</span>.<br> The wind speed is <span class='red'>" + windSpeedData + "mph</span>.<br> The temperature is <span class='red'>" + temperatureData + "°F</span>.");
};

$(document).ready(function(){
  var currentWeatherObject = new Weather();
  $('#find-city').click(function(){
    var city = $('#city').val();
    city = city.toLowerCase().replace(/\b[a-z]/g, function(letter) {
      return letter.toUpperCase();
    });
    currentWeatherObject.getWeather(city, displayWeather);
  });
});
