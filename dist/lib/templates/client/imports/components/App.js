'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = App;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function App() {
  return _react2.default.createElement(
    'h1',
    { style: { color: 'black', background: 'white' } },
    'React is working!',
    _react2.default.createElement('br', null),
    '(find me at ./client/imports/components/App.jsx)'
  );
}