/* eslint-disable  no-console */

import _ from 'lodash';
import reacterminator from 'reacterminator';
import exec from './helpers/exec';
import glob from 'glob';
import chalk from 'chalk';
import zipfile from 'zipfile';
import fs from 'fs';

export default function update() {
  unzipDesign()

  // images
  exec('mkdir -p public/images');
  exec('cp .design/images/* public/images');

  // css
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

  // javascript
  exec('mkdir -p client/js');
  exec('cp .design/js/* client/js');

  // reacterminator
  console.log(
    chalk.bold('RUNNING: ') +
    chalk.green('REACTERMINATOR')
  );
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

// extract zip file
function unzipDesign () {
  // check if .design.zip exists
  try {
    const hasZipFile = fs.statSync('.design.zip').isFile()
    if (!hasZipFile) {
      return
    }
  } catch (e) {
    return
  }

  // create necessary folder
  exec('mkdir -p .design/');
  exec('mkdir -p .design/css');
  exec('mkdir -p .design/js');
  exec('mkdir -p .design/images');

  // unzip the .design.zip file
  console.log(chalk.bold('RUNNING: ') + chalk.green('unzip .design.zip'))
  const zip = new zipfile.ZipFile('.design.zip');
  zip.names.forEach(function (filePath) {
    // do not copy whole path path
    if (/\/$/.test(filePath)) {
      return
    }
    zip.copyFileSync(filePath, '.design/' + filePath)
  })
}
