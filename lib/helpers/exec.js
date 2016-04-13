const shell = require('shelljs');
const chalk = require('chalk');

function exec(cmd, opt) {
  const options = opt || {};

  console.log(
    chalk.bold('RUNNING: ') +
    chalk.green(cmd)
  );

  shell.exec(cmd, options);
}

module.exports = exec;
