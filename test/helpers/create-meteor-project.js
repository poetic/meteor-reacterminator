var path = require('path')
var shelljs = require('shelljs')

module.exports = function createMeteorProject () {
  var rootPath = path.resolve(__dirname, '../../')
  shelljs.cd(rootPath)
  shelljs.rm('-rf', 'test-example')
  shelljs.cp('-R', 'fresh-meteor-app/', 'test-example')
  shelljs.cp('-R', 'fresh-meteor-app/.meteor/', 'test-example/.meteor')
  shelljs.cp('-R', 'fresh-meteor-app/.design/', 'test-example/.design')
  shelljs.cd('test-example')
}
