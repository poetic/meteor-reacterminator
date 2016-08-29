/* eslint-disable  no-console */

const chalk = require('chalk');
const fs = require('fs');

module.exports = function checkDotDesignDir() {
  // check if DESIGN_FILE exists
  try {
    const hasDotDesignDir = fs.statSync('.design').isDirectory();
    if (!hasDotDesignDir) {
      throw new Error('Can not find design.zip or .design folder');
    }
  } catch (e) {
    console.log(chalk.red.bold(
      'You need to download webflow zip file here and rename it as design.zip.'
    ));
    throw new Error('need webflow design.zip file.');
  }
};
