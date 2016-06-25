/* eslint-disable  no-console */

const shell = require('shelljs');
const chalk = require('chalk');

module.exports = function exec(cmd, opt) {
  const options = opt || {};

  console.log(chalk.green(cmd));

  shell.exec(cmd, options);
};
