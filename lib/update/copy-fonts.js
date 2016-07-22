const _ = require('lodash');
const cheerio = require('cheerio');
const readOneHtml = require('../helpers/read-one-html');
const fs = require('fs');
const regenerateFolderInPublic = require('../helpers/regenerate-folder-in-public');

function removeFontScriptTags($, inverse) {
  $('head').children().each((index, element) => {
    const src = $(element).attr('src');
    const isWebFontJs = src && _.endsWith(src, 'webfont.js');

    const content = _.trim($(element).text());
    const isWebFontLoad = content && _.startsWith(content, 'WebFont.load');

    const isFontTag = (isWebFontJs || isWebFontLoad);
    const shouldRemove = inverse ? !isFontTag : isFontTag;

    if (shouldRemove) {
      $(element).remove();
    }
  });
}

function copyFontScriptsToMainHtml() {
  // get font script tags from head of a html file
  const $from = cheerio.load(readOneHtml());
  removeFontScriptTags($from, true);
  const tagsString = `  ${_.trim($from('head').html())}\n`;

  // insert script tags into the the main.html
  const $to = cheerio.load(fs.readFileSync('client/main.html', 'utf-8'));
  removeFontScriptTags($to);
  $to('head').append(tagsString);
  fs.writeFileSync('client/main.html', $to.html().replace(/\n+\s*\n+/g, '\n'));
}

module.exports = function copyFonts() {
  // copy custom font files
  // TODO: we may need to change the css file to
  // import font files from an absolute url,
  // for now the paths are shallow, copy font files works
  regenerateFolderInPublic('fonts');

  copyFontScriptsToMainHtml();
};
