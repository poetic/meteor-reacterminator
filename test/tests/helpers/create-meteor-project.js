const path = require('path');
const shell = require('shelljs');

module.exports = function createMeteorProject() {
  const testRoot = path.resolve(__dirname, '../../');
  shell.cd(testRoot);
  shell.rm('-rf', 'example');
  shell.exec('meteor create example');
  shell.cp('-R', 'design', 'example/.design');
  shell.cd('example');
};
