const _ = require('lodash');
const path = require('path');
const rt = require('reacterminator');
const { ls } = require('shelljs');

function getMeteorRoot() {
  let currentPath = path.resolve('.');
  do {
    const paths = ls('-A', currentPath);
    const isMeteorRoot =
      _.includes(paths, '.meteor') &&
      _.includes(paths, 'package.json');

    if (isMeteorRoot) {
      return currentPath;
    }

    currentPath = path.resolve(currentPath, '..');
  }
  while (currentPath !== '/');

  throw new Error('Ops, can not find your meteor project root directory.');
}

module.exports = (rawPath) => rt.generate(rawPath, `${getMeteorRoot()}/client/imports`);
