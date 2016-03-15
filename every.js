var _ = require("lodash");

function checkTemperature(temperature) {
  return temperature > 19;
}

var temp = function(cities) {
  var results = {
    hot: [],
    warm: []
  }

  _.forEach(cities, function(city, cityName) {
    if (_.every(city, checkTemperature)) {
      results.hot.push(cityName);
    } else if (_.some(city, checkTemperature)) {
      results.warm.push(cityName);
    }
  });

  return results;
};

module.exports = temp;
