#! /usr/bin/env node
/* eslint-disable  no-console */

const program = require('commander');
const create = require('../lib/create');

let projectName;

program
  .arguments('<name>')
  .action((name) => { projectName = name; });

program.on('--help', () => {
  console.log('Create a meteor project with react and redux configured.');
  process.exit(0);
});

program.parse(process.argv);

if (!projectName) {
  console.error('ERROR: No name given!');
  process.exit(1);
}

create(projectName);
