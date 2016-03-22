/* eslint-env mocha */
var assert = require('chai').assert
var meterminator = require('../../../lib/index.js')

describe('index', function () {
  it('is a function', function () {
    assert.isFunction(meterminator)
  })
})
