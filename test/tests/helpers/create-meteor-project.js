var path = require('path');
var shell = require('shelljs');

module.exports = function createMeteorProject () {
  var testRoot = path.resolve(__dirname, '../../');
  shell.cd(testRoot);
  shell.rm('-rf', 'example');
  shell.exec('meteor create example');
  shell.cp('-R', 'design', 'example/.design');
  shell.cd('example')
}
