const unzipDesign = require('./update/unzip-design');
const copyImages = require('./update/copy-images');
const copyCss = require('./update/copy-css');
const copyFontScriptsToMainHtml = require('./update/copy-font-scripts-to-main-html');
const runReacterminator = require('./update/run-reacterminator');

module.exports = function update() {
  unzipDesign();

  copyImages();

  copyCss();

  copyFontScriptsToMainHtml();

  runReacterminator();
};
