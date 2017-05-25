var Weather = require('./../js/weather.js').weatherModule;

$(document).ready(function() {
 var currentWeather = new Weather();
 $('#weather-location').click(function(){
   var city = $('#location').val();
   currentWeather.getWeather(city);
 });
});
