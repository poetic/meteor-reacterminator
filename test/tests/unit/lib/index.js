/* eslint-env mocha */
const assert = require('chai').assert;
const stanza = require('../../../../lib/index.js');

describe('index', () => {
  it('is a function', () => {
    assert.isFunction(stanza);
  });
});
