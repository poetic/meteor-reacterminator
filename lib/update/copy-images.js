const logTask = require('../helpers/log-task');
const { mkdir, rm, cp } = require('../helpers/shelljs');

module.exports = function copyImages() {
  logTask('Regenerate images');
  rm('-rf', 'public/images');
  mkdir('-p', 'public/images');
  cp('.design/images/*', 'public/images');
};
