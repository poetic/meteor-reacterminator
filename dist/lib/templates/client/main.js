'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _meteor = require('meteor/meteor');

var _reactDom = require('react-dom');

var _App = require('./imports/components/App.jsx');

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_meteor.Meteor.startup(function () {
  (0, _reactDom.render)(_react2.default.createElement(_App2.default, null), document.getElementById('render-target'));
});