/* eslint-env mocha */
const fs = require('fs');
const { assert } = require('chai');
const path = require('path');
const update = require('../../lib/update');
const { cd, rm, mkdir, cp } = require('shelljs');

describe('update', () => {
  it('update a meteor app', () => {
    const examplesPath = path.resolve(__dirname, '../../examples');
    cd(examplesPath);
    rm('-rf', 'example');
    mkdir('./example');
    cp('-R', 'design', 'example/.design');
    cd('example');

    update();

    assert(fs.statSync('client/imports/generated/components/ComponentA.jsx').isFile());
    assert(fs.statSync('public/images/webflow.jpg').isFile());
    assert(fs.statSync('client/css/lib/webflow.css').isFile());
  });
});
