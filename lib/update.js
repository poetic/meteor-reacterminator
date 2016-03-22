module.exports = update

var _ = require('lodash')
var reacterminator = require('reacterminator')

function update (options) {
  var defaultOptions = {
    outputPath: 'client/imports/components',
    generateFiles: true
  }

  reacterminator(
    {type: 'path', content: options.inputPath},
    _.extend(defaultOptions, options)
  )
}
