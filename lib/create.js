module.exports = create

var exec = require('./helpers/exec.js')
var update = require('./update.js')
var path = require('path')

function create (options) {
  exec('rm ./client/* ./server/*')
  exec('meteor remove autopublish insecure blaze-html-templates')
  exec('meteor add static-html')
  exec('npm install react react-dom --save')
  exec([
    'cp -r',
    path.resolve(__dirname, 'templates/*'),
    './'
  ].join(' '))

  update(options)
}
