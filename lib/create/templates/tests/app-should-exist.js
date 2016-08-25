/* eslint-env mocha */
/* eslint-disable func-names, prefer-arrow-callback */

// These are Chimp globals
/* globals browser assert server */

// PLEASE READ: http://guide.meteor.com/testing.html#acceptance-testing
describe('app should exist', function () {
  beforeEach(function () {
    browser.url('http://localhost:3000');
  });

  it('can create a list @watch', function () {
    const doesExist = browser.waitForExist('render-target');

    assert.equal(doesExist, true);
  });
});
