/* eslint-disable  no-console */
const chalk = require('chalk');

module.exports = function logInstruction(projectName) {
  console.log('\n==============================================\n');
  console.log(chalk.red('TODO:'));
  console.log(chalk.green(`
1. cd ${projectName}
2. copy webflow zip file here as design.zip
3. stanza update
`));
};
