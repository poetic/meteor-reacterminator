/* eslint-disable  no-console */

import _ from 'lodash';
import fs from 'fs';
import exec from './helpers/exec';
import path from 'path';
import chalk from 'chalk';
import logTask from './helpers/log-task';

export default function create() {
  logTask('Clean client server and shared folder');
  exec('rm -rf ./client ./server ./shared');
  exec('mkdir  ./client ./server ./shared');

  logTask('Install dependencies');

  // meteor dependencies
  const meteorDependenciesToRemove = [
    'autopublish',
    'insecure',
    'blaze-html-templates',
  ];
  exec(`meteor remove ${meteorDependenciesToRemove.join(' ')}`);

  const meteorDependencies = [
    'static-html',
    'react-meteor-data',
    'aldeed:simple-schema',
    'aldeed:collection2',
    'dburles:collection-helpers',
  ];
  exec(`meteor add ${meteorDependencies.join(' ')}`);

  // npm dependencies
  const npmDependencies = [
    'react',
    'react-dom',
    'lodash',
    'react-addons-pure-render-mixin', // react-meteor-data depends on this
    'param-store',
    'react-redux',
    'redux-thunk',
    'react-super-components',
    'eslint-config-poetic',
  ];
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
  const eslintrcJSPath = path.resolve('./.eslintrc.js');
  const packageJSONObject = require(packageJSONPath);
  const eslintrcJSObject = { extends: 'poetic' };
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
  fs.writeFileSync(
    eslintrcJSPath, `${JSON.stringify(eslintrcJSObject, null, 2)}\n`
  );

  logTask('Copy boilerplate');
  const templatesPath = path.resolve(__dirname, '../../templates');
  exec(['cp -R', `${templatesPath}/.`, './'].join(' '));

  console.log('\n==============================================\n');
  console.log('Prepare design.zip from webflow or extracted .design/ folder and run:');
  console.log(chalk.green('stanza --update\n'));
}
