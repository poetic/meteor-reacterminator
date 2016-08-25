const { exec, mkdir, rm, cd } = require('../helpers/shelljs');
const logTask = require('../helpers/log-task');

module.exports = function createMeteor(projectName) {
  // create meteor project
  logTask('Create meteor project');
  exec(`meteor create ${projectName}`);
  cd(projectName);

  logTask('Clean client and server');
  rm('-rf', './client', './server');
  mkdir('./client', './server');

  logTask('Install dependencies');
};
