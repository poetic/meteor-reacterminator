/* eslint-disable  no-console */

import _ from 'lodash';
import reacterminator from 'reacterminator';
import exec from './helpers/exec';
import logTask from './helpers/log-task';
import glob from 'glob';
import chalk from 'chalk';
import fs from 'fs';
import cheerio from 'cheerio';
import path from 'path';

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
  exec('rm -rf .design/');
  exec(`unzip ${DESIGN_FILE} -d .design/`);
}

export default function update() {
  unzipDesign();

  // images
  logTask('Regenerate images');
  exec('rm -rf public/images');
  exec('mkdir -p public/images');
  exec('cp .design/images/* public/images');

  // css
  logTask('Regenerate css');
  exec('rm -rf client/css');
  exec('mkdir -p client/css');
  exec('mkdir -p client/css/lib');
  const cssFiles = glob.sync('.design/css/*.css');
  cssFiles.forEach((name) => {
    const libCssFiles = [
      '.design/css/normalize.css',
      '.design/css/webflow.css',
    ];

    if (_.includes(libCssFiles, name)) {
      exec(`cp ${name} client/css/lib`);
    } else {
      exec(`cp ${name} client/css/`);
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

  // change main.jsx if it is still the default file
  regenerateMain()

  // html (reacterminator)
  logTask('Regenerate components via reacterminator');
  reacterminator(
    { type: 'path', content: '.design/' },
    {
      outputPath: 'client/imports/components',
      changeLinksForParamStore: true,
      generateFiles: true,
      recursive: true,
      overrideFiles: true,
      fileToComponent: true,
    }
  );
}

function regenerateMain () {
  const currentContent = fs.readFileSync('./client/main.jsx', 'utf-8');
  const defaultContent = fs.readFileSync(
    path.resolve(__dirname, '../../templates/client/main.jsx'),
    'utf-8'
  );
  const isDefault = currentContent === defaultContent;

  if (!isDefault) {
    return;
  }

  logTask('Regenerate ./client/main.jsx');

  const MAIN_JSX_TEMPLATE = `\
import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import AppWrapper from './imports/custom-components/AppWrapper.jsx';

Meteor.startup(() => {
  render(<AppWrapper />, document.getElementById('render-target'));
});
`;

  fs.writeFileSync('./client/main.jsx', MAIN_JSX_TEMPLATE);
}
