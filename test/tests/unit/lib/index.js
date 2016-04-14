/* eslint-env mocha */
import { assert } from 'chai';
import stanza from '../../../../src/lib/index.js';

describe('index', () => {
  it('is a function', () => {
    assert.isFunction(stanza);
  });
});
