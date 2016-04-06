module.exports = create

var fs = require('fs')
var exec = require('./helpers/exec.js')
var path = require('path')
var chalk = require('chalk')

function create (options) {
  exec('rm ./client/* ./server/*')
  exec('meteor remove autopublish insecure blaze-html-templates')
  exec('meteor add static-html')
  exec('meteor npm install --save react react-dom param-store')
  exec('meteor npm install --save-dev eslint-config-airbnb eslint-plugin-react eslint')

  // add test commands to package.json
  console.log(
    chalk.bold('RUNNING: ') +
    chalk.green('ENABLE `npm test`')
  )
  var packageJSONPath = path.resolve('./package.json')
  var packageJSONObject = require(packageJSONPath)
  packageJSONObject.scripts = {
    test: 'npm run lint',
    lint: 'eslint ./**/*.js ./**/*.jsx',
    'lint:fix': 'eslint --fix ./**/*.js ./**/*.jsx'
  }
  fs.writeFileSync(packageJSONPath, JSON.stringify(packageJSONObject, null, 2))

  var templatesPath = path.resolve(__dirname, 'templates')
  exec(['cp -R', templatesPath + '/.', './'].join(' '))

  console.log('\n==============================================\n')
  console.log('You can run the following command after you prepared the files inside .design/ folder:')
  console.log(chalk.green('stanza --update\n'))
}
