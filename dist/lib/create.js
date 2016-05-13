'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = create;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _exec = require('./helpers/exec');

var _exec2 = _interopRequireDefault(_exec);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _logTask = require('./helpers/log-task');

var _logTask2 = _interopRequireDefault(_logTask);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable  no-console */

function create() {
  (0, _logTask2.default)('Clean client server and shared folder');
  (0, _exec2.default)('rm -rf ./client ./server ./shared');
  (0, _exec2.default)('mkdir  ./client ./server ./shared');

  (0, _logTask2.default)('Install dependencies');

  // meteor dependencies
  var meteorDependenciesToRemove = ['autopublish', 'insecure', 'blaze-html-templates'];
  (0, _exec2.default)('meteor remove ' + meteorDependenciesToRemove.join(' '));

  var meteorDependencies = ['static-html', 'react-meteor-data', 'aldeed:simple-schema', 'aldeed:collection2', 'dburles:collection-helpers'];
  (0, _exec2.default)('meteor add ' + meteorDependencies.join(' '));

  // npm dependencies
  var npmDependencies = ['react', 'react-dom', 'lodash', 'react-addons-pure-render-mixin', // react-meteor-data depends on this
  'param-store', 'react-redux', 'redux-thunk'];
  (0, _exec2.default)('meteor npm install --save ' + npmDependencies.join(' '));

  //   NOTE: if we use meteor npm install, chimp will break
  (0, _exec2.default)('npm list -g chimp || npm install --global chimp');
  var npmDevDependencies = ['eslint-config-airbnb', 'eslint-plugin-react', 'eslint', 'react-addons-test-utils', 'mocha', 'faker'];
  (0, _exec2.default)('meteor npm install --save-dev ' + npmDevDependencies.join(' '));

  // npm script commands
  (0, _logTask2.default)('Add npm scripts');
  var packageJSONPath = _path2.default.resolve('./package.json');
  var packageJSONObject = require(packageJSONPath);
  _lodash2.default.extend(packageJSONObject.scripts, {
    test: 'npm run lint && chimp --mocha --path=tests --browser=phantomjs',
    lint: 'eslint . --ext .jsx,.js',
    'lint:quiet': 'eslint . --ext .jsx,.js || true',
    fix: 'eslint . --ext .jsx,.js --fix',
    watch: 'chimp --ddp=http://localhost:3000 --watch --mocha --path=tests'
  });
  _fs2.default.writeFileSync(packageJSONPath, JSON.stringify(packageJSONObject, null, 2) + '\n');

  (0, _logTask2.default)('Copy boilerplate');
  var templatesPath = _path2.default.resolve(__dirname, '../../templates');
  (0, _exec2.default)(['cp -R', templatesPath + '/.', './'].join(' '));

  console.log('\n==============================================\n');
  console.log('Prepare design.zip from webflow or extracted .design/ folder and run:');
  console.log(_chalk2.default.green('stanza --update\n'));
}