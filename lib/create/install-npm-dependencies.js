const { exec } = require('../helpers/shelljs');

module.exports = function installNpmDependencies() {
  // dependencies
  const npmDependencies = [
    'lodash',
    'react',
    'react-dom',
    'react-addons-pure-render-mixin', // react-meteor-data depends on this
    'redux',
    'react-redux',
    'redux-thunk',
    'param-store',
    'react-super-components',
  ];
  exec(`meteor npm install --save ${npmDependencies.join(' ')}`);

  // dev dependencies
  const npmDevDependencies = [
    'eslint-config-poetic',
    'react-addons-test-utils',
    'mocha',
    'faker',
  ];
  exec(`meteor npm install --save-dev ${npmDevDependencies.join(' ')}`);

  // chimp
  exec('npm list -g chimp || npm install --global chimp');

  // meteor-multi-deploy
  exec('npm install -g meteor-multi-deploy');
  exec('mmd setup');
};
