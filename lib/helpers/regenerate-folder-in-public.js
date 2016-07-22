const logTask = require('../helpers/log-task');
const { mkdir, rm, cp } = require('../helpers/shelljs');

module.exports = function regenerateFolderInPublic(folder) {
  logTask(`Regenerate ${folder}`);
  rm('-rf', `public/${folder}`);
  mkdir('-p', `public/${folder}`);
  cp(`.design/${folder}/*`, `public/${folder}`);
};
