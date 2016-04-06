# stanza
[![travis][travis-image]][travis-url]
[![npm][npm-image]][npm-url]
[![coverall][coverall-image]][coverall-url]
[![js-standard-style][js-standard-style-image]][js-standard-style-url]

[travis-image]:            https://travis-ci.com/poetic/stanza.svg?token=n9msxeiUd3RfRLLkqRQL&branch=master
[travis-url]:              https://travis-ci.com/poetic/stanza
[npm-image]:               https://img.shields.io/npm/v/stanza.svg
[npm-url]:                 https://npmjs.org/package/stanza
[coverall-image]:          https://coveralls.io/repos/github/poetic/stanza/badge.svg?branch=master&t=DQDCRT
[coverall-url]:            https://coveralls.io/github/poetic/stanza
[js-standard-style-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg
[js-standard-style-url]:   http://standardjs.com/

## Usage

### How to use stanza
```
meteor create --release 1.3 example
cd example
npm install -g poetic/stanza
stanza --create
stanza --update
```

### npm commands you can use after 'stanza --create'
```
npm test # linting, testing and coverage
npm run lint # linting
npm run lint:fix # automatically fix lint errors
```

### CLI
```
Usage: stanza [options]

Convert annotated htmls and css files to a functional meteor app

Options:

  -h, --help                   output usage information
  -c, --create                 Remove default meteor files, configure packages for a react project
  -u, --update                 Convert htmls, add the files into the meteor app
  -i, --input-path [.design/]  specify input path, it can be a file or a folder
  -r, --recursive              find files in the input folder recursivly
  -o, --override-files         override existing files in the output path

Examples:

  $ stanza -c
  $ stanza -u
  $ stanza -u -i design/
  $ stanza -u -i design.html
```

## Development

### [Trello](https://trello.com/b/WUNN44Dp/meterminator)
