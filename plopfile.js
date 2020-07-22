const componentGenerator = require('./templates/Component');
const pageGenerator = require('./templates/Page');

module.exports = function(plop) {
  plop.setGenerator('component', componentGenerator);
  plop.setGenerator('page', pageGenerator);
};
