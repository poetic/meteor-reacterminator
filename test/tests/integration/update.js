/* eslint-env mocha */
const fs = require('fs');
const assert = require('chai').assert;
const stanza = require('../../../lib/index');
const createMeteorProject = require('../helpers/create-meteor-project');

describe('update', () => {
  it('update a meteor app', () => {
    createMeteorProject();
    stanza('update');

    assert(fs.statSync('client/imports/components/ComponentA.jsx').isFile());
    assert(fs.statSync('public/images/webflow.jpg').isFile());
    assert(fs.statSync('client/css/lib/webflow.css').isFile());
  });
});
