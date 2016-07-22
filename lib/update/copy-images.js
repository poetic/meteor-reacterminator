const logTask = require('../helpers/log-task');
const { mkdir, rm, cp } = require('../helpers/shelljs');
const regenerateFolderInPublic = require('../helpers/regenerate-folder-in-public');

module.exports = function copyImages() {
  regenerateFolderInPublic('images');
};
