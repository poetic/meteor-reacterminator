/* eslint-env mocha */
const fs = require('fs');
const stanza = require('../../../lib/index');
const createMeteorProject = require('../helpers/create-meteor-project');
const assert = require('chai').assert;

describe('create', () => {
  it('create a meteor app', () => {
    createMeteorProject();
    stanza('create');

    assert(fs.statSync('client/main.jsx').isFile());
    assert(fs.statSync('.gitignore').isFile());
  });
});
