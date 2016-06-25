const _ = require('lodash');
const create = require('./create');
const update = require('./update');

module.exports = function stanza(task, opt) {
  const options = _.extend({ inputPath: './.design/' }, opt);

  if (task === 'create') {
    create(options);
    return;
  }

  if (task === 'update') {
    update(options);
    return;
  }

  throw new Error(`task is one of "init" and "update", but got: ${task}`);
};
