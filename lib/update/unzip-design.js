const fs = require('fs');
const logTask = require('../helpers/log-task');
const DESIGN_FILE = 'design.zip';
const { exec, rm } = require('../helpers/shelljs');

module.exports = function unzipDesign() {
  // check if DESIGN_FILE exists
  try {
    const hasZipFile = fs.statSync(DESIGN_FILE).isFile();
    if (!hasZipFile) {
      console.log(`Error: Cannot stat ${DESIGN_FILE} file\nPlease re-download your webflow zip file and copy it here, renaming it to design.zip.`);
      return false;

    }
  } catch (e) {
    console.log(`Error: Cannot find ${DESIGN_FILE} file\nPlease make sure you have copied your webflow zip file into the local directory and renamed in design.zip.`);
    return false;

  }

  logTask('Regenerate .design/ folder');

  // create necessary folders
  rm('-rf', '.design/');
  exec(`unzip ${DESIGN_FILE} -d .design/`);

  return true;

};
