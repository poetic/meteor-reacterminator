/* eslint-env mocha */
const fs = require('fs');
const { assert } = require('chai');
const path = require('path');
const create = require('../../../lib/create');
const { cd, rm } = require('shelljs');

describe('create', () => {
  it('create a meteor app', () => {
    const testRoot = path.resolve(__dirname, '../../');
    cd(testRoot);
    rm('-rf', 'example');

    create('example');

    assert(fs.statSync('client/main.jsx').isFile());
    assert(fs.statSync('.gitignore').isFile());
  });
});
