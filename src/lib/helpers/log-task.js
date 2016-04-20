/* eslint-disable  no-console */

import chalk from 'chalk';

export default function logTask(task) {
  console.log(chalk.bold(`===== ${task}`));
}
