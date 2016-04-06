/* eslint-env mocha */
/* eslint-disable func-names, prefer-arrow-callback */
import React from 'react';
import App from './App';
import { chai } from 'meteor/practicalmeteor:chai';
import ReactTestUtils from 'react-addons-test-utils';

describe('App', function () {
  it('is a react component', function () {
    chai.assert(ReactTestUtils.isElement(<App />));
  });
});
