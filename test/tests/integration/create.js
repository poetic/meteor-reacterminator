/* eslint-env mocha */
const fs = require('fs');
const assert = require('chai').assert;
const stanza = require('../../../lib/index.js');
const createMeteorProject = require('../helpers/create-meteor-project.js');

describe('create', () => {
  this.timeout(10 * 60 * 1000);

  it('create a meteor app', () => {
    createMeteorProject();
    stanza('create');

    assert(fs.statSync('client/main.jsx').isFile());
    assert(fs.statSync('.gitignore').isFile());
  });
});
