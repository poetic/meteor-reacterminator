const _ = require('lodash');
const cheerio = require('cheerio');
const readOneHtml = require('../helpers/read-one-html');
const fs = require('fs');

module.exports = function copyFontScriptsToMainHtml() {
  // get font script tags from head of a html file
  const $from = cheerio.load(readOneHtml());
  $from('head').children().each((index, element) => {
    const src = $from(element).attr('src');
    const isWebFontJs = src && _.endsWith(src, 'webfont.js');
    if (isWebFontJs) {
      return;
    }

    const content = _.trim($from(element).text());
    const isWebFontLoad = content && _.startsWith(content, 'WebFont.load');
    if (isWebFontLoad) {
      return;
    }

    $from(element).remove();
  });

  const tagsString = _.trim($from('head').html());

  // insert script tags into the the main.html
  const $to = cheerio.load(fs.readFileSync('client/main.html', 'utf-8'));
  $to('head').append(tagsString);
  fs.writeFileSync('client/main.html', $to.html());
};
