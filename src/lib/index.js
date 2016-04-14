import _ from 'lodash';
import create from './create';
import update from './update';

export default function stanza(task, opt) {
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
