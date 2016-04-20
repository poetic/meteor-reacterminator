'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exec;

var _shelljs = require('shelljs');

var _shelljs2 = _interopRequireDefault(_shelljs);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable  no-console */

function exec(cmd, opt) {
  var options = opt || {};

  console.log(_chalk2.default.green(cmd));

  _shelljs2.default.exec(cmd, options);
}