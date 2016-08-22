/* eslint-disable  no-console */

const apolloDependencies = require('./optional/apollo-dependencies');
const _ = require('lodash');
const fs = require('fs');
const { exec, mkdir, rm, cd, cp } = require('./helpers/shelljs');
const path = require('path');
const chalk = require('chalk');
const logTask = require('./helpers/log-task');

module.exports = function create(projectName) {
  // create meteor project
  logTask('Create meteor project');
  exec(`meteor create ${projectName}`);
  cd(projectName);

  logTask('Clean client and server');
  rm('-rf', './client', './server');
  mkdir('./client', './server');

  logTask('Install dependencies');

  // meteor dependencies
  const meteorDependenciesToRemove = [
    'autopublish',
    'insecure',
    'blaze-html-templates',
  ];
  exec(`meteor remove ${meteorDependenciesToRemove.join(' ')}`);

  const meteorDependencies = [
    'accounts-base',
    'static-html',
    'react-meteor-data',
    'aldeed:simple-schema',
    'aldeed:collection2',
    'dburles:collection-helpers',
    'poetic:meteor-subscribe-all',
  ];
  exec(`meteor add ${meteorDependencies.join(' ')}`);

  // npm dependencies
  const npmDependencies = [
    'lodash',
    'react',
    'react-dom',
    'react-addons-pure-render-mixin', // react-meteor-data depends on this
    'redux',
    'react-redux',
    'redux-thunk',
    'param-store',
    'react-super-components',
  ].concat(apolloDependencies);

  exec(`meteor npm install --save ${npmDependencies.join(' ')}`);

  //   NOTE: if we use meteor npm install, chimp will break
  exec('npm list -g chimp || npm install --global chimp');
  const npmDevDependencies = [
    'eslint-config-poetic',
    'react-addons-test-utils',
    'mocha',
    'faker',
  ];
  exec(`meteor npm install --save-dev ${npmDevDependencies.join(' ')}`);

  // npm script commands
  logTask('Add npm scripts');
  const packageJSONPath = path.resolve('./package.json');
  const packageJSONObject = require(packageJSONPath); // eslint-disable-line global-require

  _.extend(packageJSONObject.scripts, {
    test: 'npm run lint && chimp --mocha --path=tests --browser=phantomjs',
    lint: 'eslint . --ext .jsx,.js',
    'lint:quiet': 'eslint . --ext .jsx,.js || true',
    fix: 'eslint . --ext .jsx,.js --fix',
    watch: 'chimp --ddp=http://localhost:3000 --watch --mocha --path=tests',
  });
  fs.writeFileSync(
    packageJSONPath, `${JSON.stringify(packageJSONObject, null, 2)}\n`
  );

  // copy boilerplate
  logTask('Copy boilerplate');
  const templatesPath = path.resolve(__dirname, '../templates');
  cp('-R', `${templatesPath}/.`, './');

  // prepare for deployment using meteor-multi-deploy
  exec('npm install -g meteor-multi-deploy');
  exec('mmd setup');

  console.log('\n==============================================\n');
  console.log(chalk.red('TODO:'));
  console.log(chalk.green(`
1. cd ${projectName}
2. copy webflow zip file here as design.zip
3. stanza update
`));
};
