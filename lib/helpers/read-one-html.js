const glob = require('glob');
const fs = require('fs');

module.exports = function readOneHtml() {
  const firstHtmlFilePath = glob.sync('.design/*.html')[0];
  return fs.readFileSync(firstHtmlFilePath, 'utf-8');
};
