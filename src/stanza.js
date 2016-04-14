#! /usr/bin/env node

/* eslint-disable  no-console */

import _ from 'lodash';
import program from 'commander';
import stanza from './lib/index';

program
  .description('Poetic meteor-react project generator')
  .option(
    '-c, --create',
    'Remove default meteor files, add and remove packages for a react project'
  )
  .option(
    '-u, --update',
    'Convert htmls, add the files into the meteor app'
  );

program.on('--help', () => {
  console.log('  Examples:');
  console.log('');
  console.log('    $ stanza -c');
  console.log('    $ stanza -u');
  console.log('');
});

program.parse(process.argv);

if (!process.argv.slice(2).length) {
  program.outputHelp();
  process.exit(1);
}

const task = _.find(['create', 'update'], (taskName) => program[taskName]);

stanza(task);
