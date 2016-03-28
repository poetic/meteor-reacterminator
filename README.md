# meterminator
[![travis][travis-image]][travis-url]
[![npm][npm-image]][npm-url]
[![coverall][coverall-image]][coverall-url]
[![js-standard-style][js-standard-style-image]][js-standard-style-url]

[travis-image]:            https://travis-ci.com/poetic/meterminator.svg?token=n9msxeiUd3RfRLLkqRQL&branch=master
[travis-url]:              https://travis-ci.com/poetic/meterminator
[npm-image]:               https://img.shields.io/npm/v/meterminator.svg
[npm-url]:                 https://npmjs.org/package/meterminator
[coverall-image]:          https://coveralls.io/repos/github/poetic/meterminator/badge.svg?branch=master&t=DQDCRT
[coverall-url]:            https://coveralls.io/github/poetic/meterminator
[js-standard-style-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg
[js-standard-style-url]:   http://standardjs.com/

## Usage

### How to user meterminator
```
meteor create --release 1.3 example
cd example
npm install --save-dev poetic/meterminator
node\_modules/.bin/meterminator --create
```

### CLI
```
Usage: meterminator [options]

Convert annotated htmls and css files to a functional meteor app

Options:

  -h, --help                   output usage information
  -c, --create                 Remove default meteor files, add and remove packages for a react project
  -u, --update                 Convert htmls, add the files into the meteor app
  -i, --input-path [.design/]  specify input path, it can be a file or a folder
  -r, --recursive              find files in the input folder recursivly
  -o, --override-files         override existing files in the output path

Examples:

  $ meterminator -c
  $ meterminator -u
  $ meterminator -u -i design/
  $ meterminator -u -i design.html
```

## Development
