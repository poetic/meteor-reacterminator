const path = require('path');
const { cp } = require('../helpers/shelljs');
const logTask = require('../helpers/log-task');

module.exports = function copyBoilerplate() {
  // copy boilerplate
  logTask('Copy boilerplate');
  const templatesPath = path.resolve(__dirname, './templates');
  cp('-R', `${templatesPath}/.`, './');
};
