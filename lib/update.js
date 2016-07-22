const unzipDesign = require('./update/unzip-design');
const copyImages = require('./update/copy-images');
const copyCss = require('./update/copy-css');
const copyFonts = require('./update/copy-fonts');
const runReacterminator = require('./update/run-reacterminator');

module.exports = function update() {
  unzipDesign();

  copyImages();

  copyCss();

  copyFonts();

  runReacterminator();
};
