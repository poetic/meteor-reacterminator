/* eslint-disable  no-console */

import _ from 'lodash';
import fs from 'fs';
import exec from './helpers/exec';
import path from 'path';
import chalk from 'chalk';

export default function create() {
  exec('rm ./client/* ./server/*');
  exec('meteor remove autopublish insecure blaze-html-templates');
  exec('meteor add static-html react-meteor-data');
  exec('meteor npm install --save react react-dom poetic/param-store');
  // NOTE: if we use meteor npm install, chimp will break
  exec('npm install --global chimp');
  const devDependencies = [
    'eslint-config-airbnb',
    'eslint-plugin-react',
    'eslint',
    'react-addons-test-utils',
    'mocha',
  ];
  exec(`meteor npm install --save-dev ${devDependencies.join(' ')}`);

  // add test commands to package.json
  console.log(
    chalk.bold('RUNNING: ') +
    chalk.green('ADD NPM COMMANDS')
  );
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

  const templatesPath = path.resolve(__dirname, '../../templates');
  exec(['cp -R', `${templatesPath}/.`, './'].join(' '));

  console.log('\n==============================================\n');
  console.log(
    'You can run the following command after you prepared the files inside .design/ folder:'
  );
  console.log(chalk.green('stanza --update\n'));
}
