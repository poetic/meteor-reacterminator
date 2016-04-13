/* eslint-env mocha */
var fs = require('fs');
var assert = require('chai').assert;
var stanza = require('../../../lib/index.js');
var createMeteorProject = require('../helpers/create-meteor-project.js');

describe('create', function () {
  this.timeout(10 * 60 * 1000);

  it('create a meteor app', function () {
    createMeteorProject();
    stanza('create');

    assert(fs.statSync('client/main.jsx').isFile());
    assert(fs.statSync('.gitignore').isFile());
  });
});
