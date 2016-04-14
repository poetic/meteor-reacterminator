/* eslint-env mocha */
import fs from 'fs';
import { assert } from 'chai';
import stanza from '../../../src/lib/index';
import createMeteorProject from '../helpers/create-meteor-project';

describe('create', () => {
  it('create a meteor app', () => {
    createMeteorProject();
    stanza('create');

    assert(fs.statSync('client/main.jsx').isFile());
    assert(fs.statSync('.gitignore').isFile());
  });
});
