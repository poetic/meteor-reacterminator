const createMeteor = require('./create-meteor');
const installMeteorDependencies = require('./install-meteor-dependencies');
const installNpmDependencies = require('./install-npm-dependencies');
const addScriptCommands = require('./add-script-commands');
const copyBoilerplate = require('./copy-boilerplate');
const logInstruction = require('./log-instruction');
const plugins = require('../plugins/index');

module.exports = function create(projectName, options) {
  createMeteor(projectName);

  installMeteorDependencies();

  installNpmDependencies();

  addScriptCommands();

  copyBoilerplate();

  plugins.runHook('afterCreate', options);

  logInstruction();
};
