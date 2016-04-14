/* eslint-env mocha */
const fs = require('fs');
const shell = require('shelljs');
const assert = require('chai').assert;
const stanza = require('../../../src/lib/index.js');
const createMeteorProject = require('../helpers/create-meteor-project.js');

describe('update', () => {
  it('update a meteor app', () => {
    createMeteorProject();
    shell.exec('mkdir -p client/imports/components/');
    stanza('update');

    assert(fs.statSync('client/imports/components/ComponentA.jsx').isFile());
    assert(fs.statSync('public/images/webflow.jpg').isFile());
    assert(fs.statSync('client/css/lib/webflow.css').isFile());
    assert(fs.statSync('client/js/webflow.js').isFile());
  });
});
