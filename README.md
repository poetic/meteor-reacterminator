# meterminator
[![travis][travis-image]][travis-url]
[![npm][npm-image]][npm-url]
[![coverall][coverall-image]][coverall-url]
[![js-standard-style][js-standard-style-image]][js-standard-style-url]

[travis-image]:            https://travis-ci.com/poetic/meterminator.svg?token=n9msxeiUd3RfRLLkqRQL&branch=master
[travis-url]:              https://travis-ci.com/poetic/meterminator
[npm-image]:               https://img.shields.io/npm/v/meterminator.svg
[npm-url]:                 https://npmjs.org/package/meterminator
[coverall-image]:          https://img.shields.io/coveralls/poetic/meterminator.svg
[coverall-url]:            https://coveralls.io/github/poetic/meterminator
[js-standard-style-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg
[js-standard-style-url]:   http://standardjs.com/

## Usage

### How to user meterminator
meteor create --release 1.3-rc.4 example
npm install --save-dev meterminator
node\_modules/.bin/meterminator path/to/html/project/

### CLI
meterminator path/to/html/project/
meterminator path/to/html/project/sample.html
meterminator webflow.zip

## Development

### Setup
- meteor create --release 1.3-rc.4 meteor-project

### Note
- coverall does not work because we do not have a pro account and this repo
  is private

### TODO
- generate a working meteor app from webflow (html css js)
- use reacterminator to generate the front end files in client/imports/components
