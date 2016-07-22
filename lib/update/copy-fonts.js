const _ = require('lodash');
const cheerio = require('cheerio');
const readOneHtml = require('../helpers/read-one-html');
const fs = require('fs');
const { cp } = require('shelljs');
const regenerateFolderInPublic = require('../helpers/regenerate-folder-in-public');

function copyFontScriptsToMainHtml() {
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
}

module.exports = function copyFonts () {
  // copy custom font files
  // TODO: we may need to change the css file to
  // import font files from an absolute url,
  // for now the paths are shallow, copy font files works
  regenerateFolderInPublic('fonts');

  copyFontScriptsToMainHtml();
};
