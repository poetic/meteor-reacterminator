#! /usr/bin/env node
/* eslint-disable  no-console */

const program = require('commander');
const create = require('../lib/create');

const action = (name) => {
  if (!name) {
    console.error('ERROR: No name given!');
    process.exit(1);
  }

  create(name);
}

program
  .arguments('<name>')
  .action(action);

program.on('--help', () => {
  console.log('Create a meteor project with react and redux configured.');
  process.exit(0);
});

program.parse(process.argv);
