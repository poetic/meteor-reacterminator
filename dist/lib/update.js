'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = update;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _reacterminator = require('reacterminator');

var _reacterminator2 = _interopRequireDefault(_reacterminator);

var _exec = require('./helpers/exec');

var _exec2 = _interopRequireDefault(_exec);

var _logTask = require('./helpers/log-task');

var _logTask2 = _interopRequireDefault(_logTask);

var _glob = require('glob');

var _glob2 = _interopRequireDefault(_glob);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _cheerio = require('cheerio');

var _cheerio2 = _interopRequireDefault(_cheerio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable  no-console */

var DESIGN_FILE = 'design.zip';

// extract zip file
function unzipDesign() {
  // check if DESIGN_FILE exists
  try {
    var hasZipFile = _fs2.default.statSync(DESIGN_FILE).isFile();
    if (!hasZipFile) {
      return;
    }
  } catch (e) {
    return;
  }

  (0, _logTask2.default)('Regenerate .design/ folder');

  // create necessary folders
  (0, _exec2.default)('rm -rf .design/');
  (0, _exec2.default)('unzip ' + DESIGN_FILE + ' -d .design/');
}

function update() {
  unzipDesign();

  // images
  (0, _logTask2.default)('Regenerate images');
  (0, _exec2.default)('rm -rf public/images');
  (0, _exec2.default)('mkdir -p public/images');
  (0, _exec2.default)('cp .design/images/* public/images');

  // css
  (0, _logTask2.default)('Regenerate css');
  (0, _exec2.default)('rm -rf client/css');
  (0, _exec2.default)('mkdir -p client/css');
  (0, _exec2.default)('mkdir -p client/css/lib');
  var cssFiles = _glob2.default.sync('.design/css/*.css');
  cssFiles.forEach(function (name) {
    var libCssFiles = ['.design/css/normalize.css', '.design/css/webflow.css'];

    if (_lodash2.default.includes(libCssFiles, name)) {
      (0, _exec2.default)('cp ' + name + ' client/css/lib');
    } else {
      (0, _exec2.default)('cp ' + name + ' client/css/');
    }
  });
  //   extract css from head to main.css
  console.log(_chalk2.default.green('create client/css/main.css from html head'));
  var firstHtmlFilePath = _lodash2.default.first(_glob2.default.sync('.design/*.html'));
  var firstHtml = _fs2.default.readFileSync(firstHtmlFilePath, 'utf-8');
  var styleFromHead = _cheerio2.default.load(firstHtml)('head style').html();
  if (styleFromHead) {
    _fs2.default.writeFileSync('client/css/main.css', styleFromHead);
  }

  // html (reacterminator)
  (0, _logTask2.default)('Regenerate components via reacterminator');
  (0, _exec2.default)('rm -rf client/imports/components');
  (0, _reacterminator2.default)({ type: 'path', content: '.design/' }, {
    outputPath: 'client/imports/components',
    changeLinksForParamStore: true,
    generateFiles: true,
    recursive: true,
    overrideFiles: true,
    fileToComponent: true
  });
}