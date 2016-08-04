#! /usr/bin/env node
/* eslint-disable  no-console */

const program = require('commander');
const create = require('../lib/create');

program
  .arguments('<name>')
  .action((name) => {
    if (!name) {
      console.error('ERROR: No name given!');
      process.exit(1);
    }

    create(name);
  });

program.on('--help', () => {
  process.exit(0);
});

program.parse(process.argv);
