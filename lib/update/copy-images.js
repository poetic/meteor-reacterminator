const regenerateFolderInPublic = require('../helpers/regenerate-folder-in-public');

module.exports = function copyImages() {
  regenerateFolderInPublic('images');
};
