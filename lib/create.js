module.exports = create

var exec = require('./helpers/exec.js')
var path = require('path')
var chalk = require('chalk')

function create (options) {
  exec('rm ./client/* ./server/*')
  exec('meteor remove autopublish insecure blaze-html-templates')
  exec('meteor add static-html')
  exec('npm install react react-dom --save')

  var templatesPath = path.resolve(__dirname, 'templates') + '/'
  exec(['cp -R', templatesPath, './'].join(' '))

  console.log('\n==============================================\n')
  console.log('You can run the following command after you prepared the htmls inside .design/ folder:')
  console.log(chalk.green('meterminator --update'))
}
