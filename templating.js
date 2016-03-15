var _ = require("lodash");

var template = function(greeting) {

  return _.template('<%= value %>')
                  ({ value: 'Hello ' + greeting.name +
                  ' (logins: '+greeting.login.length+')'});
};

module.exports = template;
