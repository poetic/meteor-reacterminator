/* eslint-disable  no-console */
const { exec, mkdir, rm, cd, cp } = require('../../helpers/shelljs');
const path = require('path');
const logTask = require('../../helpers/log-task');

module.exports = function afterCreate() {
  console.log('Installing apollo dependencies');
  const meteorDependencies = ['apollo'];

  exec(`meteor add ${meteorDependencies.join(' ')}`);

  // npm dependencies
  const npmDependencies = [
    'apollo-client',
    'apollo-server@^0.1.1',
    'http-proxy-middleware@^0.15.0',
    'express',
    'graphql',
    'graphql-tag',
    'invariant',
    'react-apollo',
  ];
  exec(`meteor npm install --save ${npmDependencies.join(' ')}`);

  logTask('Copy Apollo boilerplate');
  const templatesPath = path.resolve(__dirname, './templates');
  cp('-R', `${templatesPath}/.`, './');

};
