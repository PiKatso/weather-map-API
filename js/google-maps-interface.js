var Map = require('./../js/google-maps.js').mapModule;

$(document).ready(function() {
  var map = new Map();
  $('#find-city').click(function(e) {
    e.preventDefault();
    var city = $('#city').val();
    map.getMap(city);
  });

});
