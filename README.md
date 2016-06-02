# stanza
[![travis][travis-image]][travis-url]
[![npm][npm-image]][npm-url]
[![coverall][coverall-image]][coverall-url]

[travis-image]:            https://travis-ci.org/poetic/stanza.svg
[travis-url]:              https://travis-ci.org/poetic/stanza
[npm-image]:               https://img.shields.io/npm/v/poetic-stanza.svg
[npm-url]:                 https://npmjs.org/package/poetic-stanza
[coverall-image]:          https://coveralls.io/repos/github/poetic/stanza/badge.svg?branch=master
[coverall-url]:            https://coveralls.io/github/poetic/stanza

## Requirements
* node >= 6.1.0
* java development kit must be installed to run tests (chimp uses selenium)

## Usage

### Example
```
meteor create example
cd example
npm install -g poetic-stanza
stanza --create
// make sure you have
// design.zip at the root the project or
// .design/ folder which contains all the webflow files
stanza --update
```

### CLI
```
Usage: stanza [options]

Convert annotated htmls and css files to a functional meteor app

Options:

  -h, --help                   output usage information
  -c, --create                 Remove default meteor files, configure packages for a react project
  -u, --update                 Convert htmls, add the files into the meteor app

Examples:

  $ stanza -c
  $ stanza -u
```

### npm commands you can use after 'stanza --create'
```
npm test # linting, testing and coverage
npm run lint # linting
npm run fix # automatically fix lint errors
```

### travis-ci
Go to [travis-ci](https://travis-ci.com/profile/poetic) enable the repo.
Remember to push a commit after you do this.

## Development

### [Trello](https://trello.com/b/WUNN44Dp/stanza)
