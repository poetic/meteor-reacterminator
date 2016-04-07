module.exports = create

var _ = require('lodash')
var fs = require('fs')
var exec = require('./helpers/exec.js')
var path = require('path')
var chalk = require('chalk')

function create (options) {
  exec('rm ./client/* ./server/*')
  exec('meteor remove autopublish insecure blaze-html-templates')
  exec('meteor add static-html practicalmeteor:mocha')
  exec('meteor npm install --save react react-dom param-store')
  var devDependencies = [
    'eslint-config-airbnb',
    'eslint-plugin-react',
    'eslint',
    'react-addons-test-utils'
  ]
  exec('meteor npm install --save-dev ' + devDependencies.join(' '))

  // add test commands to package.json
  console.log(
    chalk.bold('RUNNING: ') +
    chalk.green('ADD NPM COMMANDS')
  )
  var packageJSONPath = path.resolve('./package.json')
  var packageJSONObject = require(packageJSONPath)
  _.extend(packageJSONObject.scripts, {
    'test': 'npm run lint',
    'lint': 'eslint . --ext .jsx, js',
    'lint:fix': 'eslint . --ext .jsx, js --fix',
    'test:browser': 'meteor test --driver-package practicalmeteor:mocha',
    'test:browser:3100': 'meteor test --driver-package practicalmeteor:mocha --port 3100'
  })
  fs.writeFileSync(packageJSONPath, JSON.stringify(packageJSONObject, null, 2))

  var templatesPath = path.resolve(__dirname, 'templates')
  exec(['cp -R', templatesPath + '/.', './'].join(' '))

  console.log('\n==============================================\n')
  console.log('You can run the following command after you prepared the files inside .design/ folder:')
  console.log(chalk.green('stanza --update\n'))
}
