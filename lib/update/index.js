const unzipDesign = require('./unzip-design');
const copyImages = require('./copy-images');
const copyCss = require('./copy-css');
const copyFonts = require('./copy-fonts');
const runReacterminator = require('./run-reacterminator');
const checkDotDesignDir = require('./check-dot-design-dir');

module.exports = function update() {
  unzipDesign();

  checkDotDesignDir();

  copyImages();

  copyCss();

  copyFonts();

  runReacterminator();
};
