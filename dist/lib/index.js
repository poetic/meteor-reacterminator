'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = stanza;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _create = require('./create');

var _create2 = _interopRequireDefault(_create);

var _update = require('./update');

var _update2 = _interopRequireDefault(_update);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function stanza(task, opt) {
  var options = _lodash2.default.extend({ inputPath: './.design/' }, opt);

  if (task === 'create') {
    (0, _create2.default)(options);
    return;
  }

  if (task === 'update') {
    (0, _update2.default)(options);
    return;
  }

  throw new Error('task is one of "init" and "update", but got: ' + task);
}