'use strict';

var _ = require("lodash");

var articleOrders = function(orders) {

  var grouped =  _.groupBy(orders, 'article');
  var final = [];

  _.forEach(grouped, function(item, key) {
    key = parseInt(key);
    var total = 0;

    total = _.reduce(item, function(sum, item) {
      return sum + item.quantity;
    }, 0);

    final.push({
      article: key,
      total_orders: total
    });
  });

  var result = _.sortBy(final, 'total_orders').reverse();
  return result;
};

module.exports = articleOrders;
