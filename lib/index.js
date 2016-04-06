module.exports = stanza

var _ = require('lodash')
var create = require('./create.js')
var update = require('./update.js')

function stanza (task, options) {
  options = _.extend({inputPath: './.design/'}, options)

  if (task === 'create') {
    create(options)
    return
  }

  if (task === 'update') {
    update(options)
    return
  }

  throw new Error('task is one of "init" and "update", but got: ' + task)
}
