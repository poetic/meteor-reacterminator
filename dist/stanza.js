#! /usr/bin/env node
'use strict';

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _commander = require('commander');

var _commander2 = _interopRequireDefault(_commander);

var _index = require('./lib/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_commander2.default.description('Poetic meteor-react project generator').option('-c, --create', 'Remove default meteor files, add and remove packages for a react project').option('-u, --update', 'Convert htmls, add the files into the meteor app');

/* eslint-disable  no-console */

_commander2.default.on('--help', function () {
  console.log('  Examples:');
  console.log('');
  console.log('    $ stanza -c');
  console.log('    $ stanza -u');
  console.log('');
});

_commander2.default.parse(process.argv);

if (!process.argv.slice(2).length) {
  _commander2.default.outputHelp();
  process.exit(1);
}

var task = _lodash2.default.find(['create', 'update'], function (taskName) {
  return _commander2.default[taskName];
});

(0, _index2.default)(task);