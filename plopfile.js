const componentGenerator = require('./templates/Component');

module.exports = function(plop) {
  plop.setGenerator('component', componentGenerator);
};
