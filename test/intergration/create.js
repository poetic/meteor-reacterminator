/* eslint-env mocha */
var fs = require('fs')
var assert = require('chai').assert
var shelljs = require('shelljs')
var meterminator = require('../../lib/index.js')

describe('create', function () {
  this.timeout(5 * 60 * 1000)

  it('create a meteor app', function () {
    shelljs.rm('-rf', 'test-example')
    shelljs.cp('-R', 'fresh-meteor-app/', 'test-example')
    shelljs.cd('test-example')
    meterminator('create')

    assert(fs.statSync('client/main.jsx').isFile())
  })
})
