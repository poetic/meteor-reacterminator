/* eslint-disable  no-console */

const chalk = require('chalk');

module.exports = function logTask(task) {
  console.log(chalk.green.bold(`===== ${task}`));
};
