const { exec } = require('../helpers/shelljs');

module.exports = function installMeteorDependencies() {
  // meteor dependencies
  const meteorDependenciesToRemove = [
    'autopublish',
    'insecure',
    'blaze-html-templates',
  ];
  exec(`meteor remove ${meteorDependenciesToRemove.join(' ')}`);

  const meteorDependencies = [
    'accounts-base',
    'static-html',
    'react-meteor-data',
    'aldeed:simple-schema',
    'aldeed:collection2',
    'dburles:collection-helpers',
    'poetic:meteor-subscribe-all',
  ];
  exec(`meteor add ${meteorDependencies.join(' ')}`);
};
