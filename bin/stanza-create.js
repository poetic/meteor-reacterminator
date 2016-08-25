#! /usr/bin/env node
/* eslint-disable  no-console */

const program = require('commander');
const create = require('../lib/create/index');

program
  .arguments('<name>')
  .option('-a, --apollo')
  .action((name, options) => {
    if (!name) {
      console.error('ERROR: No name given!');
      process.exit(1);
    }

    create(name, options);
  });

program.on('--help', () => {
  process.exit(0);
});

program.parse(process.argv);
