# stanza
[![travis][travis-image]][travis-url]
[![npm][npm-image]][npm-url]
[![semantic-release][semantic-release-image]][semantic-release-url]
[![coverall][coverall-image]][coverall-url]

[travis-image]:            https://travis-ci.org/poetic/stanza.svg
[travis-url]:              https://travis-ci.org/poetic/stanza
[npm-image]:               https://img.shields.io/npm/v/poetic-stanza.svg
[npm-url]:                 https://npmjs.org/package/poetic-stanza
[semantic-release-image]:  https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-release-url]:    https://github.com/semantic-release/semantic-release
[coverall-image]:          https://coveralls.io/repos/github/poetic/stanza/badge.svg?branch=master
[coverall-url]:            https://coveralls.io/github/poetic/stanza

## Requirements
* node >= 6.1.0
* java development kit must be installed to run tests (chimp uses selenium)

## Usage

### Alias
`st`

### Example
```
npm install -g poetic-stanza
stanza create magic
cd magic
cp ~/Downloads/magic.zip ./ # magic.zip is exported from webflow
stanza update
```

### CLI
```
Usage: stanza [options] [command]


Commands:

  create|c <name>  Create a meteor project with react and redux configured.
  update|u         Update a meteor project with design.zip from webflow.
  help [cmd]       display help for [cmd]

Poetic meteor-react-webflow project generator.

Options:

  -h, --help     output usage information
  -V, --version  output the version number

Examples:

  $ stanza c my-project
  $ stanza u
```

### travis-ci
Go to [travis-ci](https://travis-ci.com/) enable the repo.
Remember to push a commit after you do this.

## Development

### [Trello](https://trello.com/b/WUNN44Dp/stanza)
