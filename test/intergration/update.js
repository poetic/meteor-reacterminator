/* eslint-env mocha */
var fs = require('fs')
var assert = require('chai').assert
var meterminator = require('../../lib/index.js')
var createMeteorProject = require('../helpers/create-meteor-project.js')

describe('update', function () {
  this.timeout(10 * 60 * 1000)

  it('update a meteor app', function () {
    createMeteorProject()
    meterminator('create')
    meterminator('update')

    assert(fs.statSync('client/imports/components/ComponentA.jsx').isFile())
  })
})
