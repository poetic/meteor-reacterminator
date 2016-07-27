/* eslint-env mocha */
const fs = require('fs');
const { assert } = require('chai');
const path = require('path');
const generate = require('../../lib/generate');
const { cd, rm, mkdir, touch } = require('shelljs');

describe('generate', () => {
  it('generate a component', () => {
    const examplesPath = path.resolve(__dirname, '../../examples');
    cd(examplesPath);
    rm('-rf', 'example');
    mkdir('-p', './example/.meteor/');
    touch('./example/package.json');
    cd('example');

    generate('components/components/Signup');

    assert(fs.statSync('client/imports/custom/index.js').isFile());
    assert(fs.statSync('client/imports/custom/components/Signup.jsx').isFile());
  });
});
