module.exports = exec

var shell = require('shelljs')
var chalk = require('chalk')

function exec (cmd) {
  console.log(
    chalk.bold('RUNNING COMMAND: ') +
    chalk.green(cmd)
  )

  shell.exec(cmd)
}
