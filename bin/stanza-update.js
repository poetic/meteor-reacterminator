#! /usr/bin/env node
/* eslint-disable  no-console */

const program = require('commander');
const update = require('../lib/update');

program.on('--help', () => {
  console.log('Update the meteor project using the design.zip from webflow');
  process.exit(0);
});

program.parse(process.argv);

update();
