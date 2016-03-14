var _ = require("lodash");

var worker = function(characters) {
  return _.filter(characters, { active: true });
};

module.exports = worker;
