import shell from 'shelljs';
import chalk from 'chalk';

export default function exec(cmd, opt) {
  const options = opt || {};

  console.log(
    chalk.bold('RUNNING: ') +
    chalk.green(cmd)
  );

  shell.exec(cmd, options);
}
