const logTask = require('../helpers/log-task');
const path = require('path');
const _ = require('lodash');
const fs = require('fs');

module.exports = function addScriptCommands() {
  // npm script commands
  logTask('Add npm scripts');
  const packageJSONPath = path.resolve('./package.json');
  const packageJSONObject = require(packageJSONPath); // eslint-disable-line global-require
  const npmScripts = {
    test: 'npm run lint && chimp --mocha --path=tests --browser=phantomjs',
    lint: 'eslint . --ext .jsx,.js',
    'lint:quiet': 'eslint . --ext .jsx,.js || true',
    fix: 'eslint . --ext .jsx,.js --fix',
    watch: 'chimp --ddp=http://localhost:3000 --watch --mocha --path=tests',
  };

  _.extend(packageJSONObject.scripts, npmScripts);

  fs.writeFileSync(
    packageJSONPath, `${JSON.stringify(packageJSONObject, null, 2)}\n`
  );
};
