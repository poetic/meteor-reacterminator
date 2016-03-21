module.exports = meterminator

var shell = require('shelljs')

function meterminator () {
  shell.rm(['./client/*', './server/*'])
}
