/* eslint-disable  no-console */

const _ = require('lodash');
const reacterminator = require('reacterminator');
const { exec, mkdir, rm, cp } = require('./helpers/shelljs');
const logTask = require('./helpers/log-task');
const glob = require('glob');
const chalk = require('chalk');
const fs = require('fs');
const cheerio = require('cheerio');

const DESIGN_FILE = 'design.zip';

// extract zip file
function unzipDesign() {
  // check if DESIGN_FILE exists
  try {
    const hasZipFile = fs.statSync(DESIGN_FILE).isFile();
    if (!hasZipFile) {
      return;
    }
  } catch (e) {
    return;
  }

  logTask('Regenerate .design/ folder');

  // create necessary folders
  rm('-rf', '.design/');
  exec(`unzip ${DESIGN_FILE} -d .design/`);
}

module.exports = function update() {
  unzipDesign();

  // images
  logTask('Regenerate images');
  rm('-rf', 'public/images');
  mkdir('-p', 'public/images');
  cp('.design/images/*', 'public/images');

  // css
  logTask('Regenerate css');
  rm('-rf', 'client/css');
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
  //   extract css from head to main.css
  console.log(chalk.green('create client/css/main.css from html head'));
  const firstHtmlFilePath = _.first(glob.sync('.design/*.html'));
  const firstHtml = fs.readFileSync(firstHtmlFilePath, 'utf-8');
  const styleFromHead = cheerio
    .load(firstHtml)('head style')
    .html();
  if (styleFromHead) {
    fs.writeFileSync('client/css/main.css', styleFromHead);
  }

  // html (reacterminator)
  logTask('Regenerate components via reacterminator');
  reacterminator(
    { type: 'path', content: '.design/' },
    {
      outputPath: 'client/imports',
      changeLinksForParamStore: true,
      generateFiles: true,
      recursive: true,
      overrideFiles: true,
      fileToComponent: true,
    }
  );
};
