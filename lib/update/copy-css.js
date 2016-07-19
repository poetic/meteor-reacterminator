/* eslint-disable  no-console */

const logTask = require('../helpers/log-task');
const { mkdir, cp } = require('../helpers/shelljs');
const glob = require('glob');
const fs = require('fs');
const _ = require('lodash');
const cheerio = require('cheerio');

module.exports = function copyCss() {
  logTask('Regenerate css');
  mkdir('-p', 'client/css');
  mkdir('-p', 'client/css/lib');
  const cssFiles = glob.sync('.design/css/*.css');
  cssFiles.forEach((name) => {
    const libCssFiles = [
      '.design/css/normalize.css',
      '.design/css/webflow.css',
    ];

    if (_.includes(libCssFiles, name)) {
      cp(name, 'client/css/lib');
    } else {
      cp(name, 'client/css/');
    }
  });
  // extract css from head to main.css
  console.log('create client/css/main.css from html head');
  const firstHtmlFilePath = _.first(glob.sync('.design/*.html'));
  const firstHtml = fs.readFileSync(firstHtmlFilePath, 'utf-8');
  const styleFromHead = cheerio
    .load(firstHtml)('head style')
    .html();
  if (styleFromHead) {
    fs.writeFileSync('client/css/main.css', styleFromHead);
  }
};
