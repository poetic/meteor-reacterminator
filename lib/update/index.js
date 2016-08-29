const unzipDesign = require('./unzip-design');
const copyImages = require('./copy-images');
const copyCss = require('./copy-css');
const copyFonts = require('./copy-fonts');
const runReacterminator = require('./run-reacterminator');

module.exports = function update() {
  if (unzipDesign())
  {
	  copyImages();

	  copyCss();

	  copyFonts();

	  runReacterminator();
  }
};
