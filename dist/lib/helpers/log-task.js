'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = logTask;

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function logTask(task) {
  console.log(_chalk2.default.bold('===== ' + task));
} /* eslint-disable  no-console */