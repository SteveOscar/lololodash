'use strict';
var _ = require("lodash");

var freelancers = function(people) {

  var average = _.reduce(people, function(sum, person) {
    return sum + person.income;
  }, 0) / people.length;

  var answer = { 'average' : average };

  var underperform = _.filter(people, function(person) {
    return person.income <= average;
  });

  var overperform = _.filter(people, function(person) {
    return person.income > average;
  });

  answer['underperform'] = _.sortBy(underperform, 'income')
  answer['overperform'] = _.sortBy(overperform, 'income')

  return answer;
};

module.exports = freelancers;
