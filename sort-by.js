var _ = require("lodash");

var sortByQuantity = function(articles) {
  return  _.sortBy(articles, function(article) {
    return -article.quantity;
  });
};

module.exports = sortByQuantity;
