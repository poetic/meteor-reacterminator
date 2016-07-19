const logTask = require('../helpers/log-task');
const reacterminator = require('reacterminator');

module.exports = function runReacterminator() {
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
