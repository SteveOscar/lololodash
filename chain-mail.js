var _ = require("lodash");

var chained = function(users) {
  return _.chain(users)
    .map(function(user) {
      return (user + 'CHAINED').toUpperCase();
    })
    .sortBy();
};

module.exports = chained;
