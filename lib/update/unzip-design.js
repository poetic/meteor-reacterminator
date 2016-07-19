const fs = require('fs');
const logTask = require('../helpers/log-task');
const DESIGN_FILE = 'design.zip';
const { exec, rm } = require('../helpers/shelljs');

module.exports = function unzipDesign() {
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
};
