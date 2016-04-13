/* eslint-env mocha */
var assert = require('chai').assert
var stanza = require('../../../../lib/index.js')

describe('index', function () {
  it('is a function', function () {
    assert.isFunction(stanza)
  })
})
