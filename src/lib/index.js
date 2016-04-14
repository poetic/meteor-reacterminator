import _ from 'lodash';
const create = require('./create.js');
const update = require('./update.js');

function stanza(task, opt) {
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
}

module.exports = stanza;
