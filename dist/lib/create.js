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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function create() {
  (0, _exec2.default)('rm ./client/* ./server/*');
  (0, _exec2.default)('meteor remove autopublish insecure blaze-html-templates');
  (0, _exec2.default)('meteor add static-html');
  (0, _exec2.default)('meteor npm install --save react react-dom poetic/param-store');
  // NOTE: if we use meteor npm install, chimp will break
  (0, _exec2.default)('npm install --global chimp');
  var devDependencies = ['eslint-config-airbnb', 'eslint-plugin-react', 'eslint', 'react-addons-test-utils', 'mocha'];
  (0, _exec2.default)('meteor npm install --save-dev ' + devDependencies.join(' '));

  // add test commands to package.json
  console.log(_chalk2.default.bold('RUNNING: ') + _chalk2.default.green('ADD NPM COMMANDS'));
  var packageJSONPath = _path2.default.resolve('./package.json');
  var packageJSONObject = require(packageJSONPath);
  _lodash2.default.extend(packageJSONObject.scripts, {
    test: 'npm run lint && chimp --mocha --path=tests',
    lint: 'eslint . --ext .jsx,.js',
    fix: 'eslint . --ext .jsx,.js --fix',
    watch: 'chimp --ddp=http://localhost:3000 --watch --mocha --path=tests'
  });
  _fs2.default.writeFileSync(packageJSONPath, JSON.stringify(packageJSONObject, null, 2) + '\n');

  var templatesPath = _path2.default.resolve(__dirname, 'templates');
  (0, _exec2.default)(['cp -R', templatesPath + '/.', './'].join(' '));

  console.log('\n==============================================\n');
  console.log('You can run the following command after you prepared the files inside .design/ folder:');
  console.log(_chalk2.default.green('stanza --update\n'));
} /* eslint-disable  no-console */