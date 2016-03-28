module.exports = update

var _ = require('lodash')
var reacterminator = require('reacterminator')
var exec = require('./helpers/exec.js')

function update (options) {
  var defaultOptions = {
    outputPath: 'client/imports/components',
    generateFiles: true
  }

  exec('mkdir -p public/images')
  exec('cp .design/images/* public/images')

  exec('mkdir -p client/css')
  exec('cp .design/css/* client/css')

  exec('mkdir -p client/js')
  exec('cp .design/js/* client/js')

  reacterminator(
    {type: 'path', content: options.inputPath},
    _.extend(defaultOptions, options)
  )
}
