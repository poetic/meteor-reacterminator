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
  exec('meteor remove autopublish insecure blaze-html-templates');
  exec('meteor add static-html react-meteor-data');
  const dependencies = [
    'react',
    'react-dom',
    'lodash',
    'react-addons-pure-render-mixin', // react-meteor-data depends on this
    'param-store',
    'react-redux',
    'redux-thunk',
  ];
  exec(`meteor npm install --save ${dependencies.join(' ')}`);
  // NOTE: if we use meteor npm install, chimp will break
  exec('npm list -g chimp || npm install --global chimp');
  const devDependencies = [
    'eslint-config-airbnb',
    'eslint-plugin-react',
    'eslint',
    'react-addons-test-utils',
    'mocha',
    'faker',
  ];
  exec(`meteor npm install --save-dev ${devDependencies.join(' ')}`);

  // add test commands to package.json
  logTask('Add npm scripts');
  const packageJSONPath = path.resolve('./package.json');
  const packageJSONObject = require(packageJSONPath);
  _.extend(packageJSONObject.scripts, {
    test: 'npm run lint && chimp --mocha --path=tests --browser=phantomjs',
    lint: 'eslint . --ext .jsx,.js',
    fix: 'eslint . --ext .jsx,.js --fix',
    watch: 'chimp --ddp=http://localhost:3000 --watch --mocha --path=tests',
  });
  fs.writeFileSync(
    packageJSONPath, `${JSON.stringify(packageJSONObject, null, 2)}\n`
  );

  logTask('Copy boilerplate');
  const templatesPath = path.resolve(__dirname, '../../templates');
  exec(['cp -R', `${templatesPath}/.`, './'].join(' '));

  console.log('\n==============================================\n');
  console.log('Prepare design.zip from webflow or extracted .design/ folder and run:');
  console.log(chalk.green('stanza --update\n'));
}
