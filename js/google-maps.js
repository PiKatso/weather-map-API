var googKey = require('./../.env').googKey;
var mapsapi = require('google-maps-api')(googKey);

function Map(){
}


exports.mapModule = Map;
