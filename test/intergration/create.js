/* eslint-env mocha */
var fs = require('fs')
var assert = require('chai').assert
var shelljs = require('shelljs')
var meterminator = require('../../lib/index.js')

describe('create', function () {
  this.timeout(10 * 60 * 1000)

  it('create a meteor app', function () {
    shelljs.rm('-rf', 'test-example')
    shelljs.cp('-R', 'fresh-meteor-app/', 'test-example')
    shelljs.cp('-R', 'fresh-meteor-app/.meteor/', 'test-example/.meteor')
    shelljs.cp('-R', 'fresh-meteor-app/.design/', 'test-example/.design')
    shelljs.cd('test-example')
    meterminator('create')

    assert(fs.statSync('client/main.jsx').isFile())
    assert(fs.statSync('client/imports/components/ComponentA.jsx').isFile())
  })
})
