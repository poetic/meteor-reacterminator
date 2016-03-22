module.exports = meterminator

var create = require('./create.js')
var update = require('./update.js')

function meterminator (task, options) {
  options = options || {}

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
