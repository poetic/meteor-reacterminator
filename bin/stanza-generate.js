#! /usr/bin/env node
/* eslint-disable  no-console */

const program = require('commander');
const generate = require('../lib/generate');

program
  .arguments('<name>')
  .action(generate);

program.on('--help', () => {
  console.log('Create a meteor project with react and redux configured.');
});

program.parse(process.argv);
