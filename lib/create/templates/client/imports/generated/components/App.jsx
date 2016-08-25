/* eslint-disable */
import React from 'react'
import custom from '../../custom/index';

export default class App extends React.Component {
  render () {
    return (
      <div>FIND ME AT client/imports/generated/components/App.jsx</div>
    )
  }
}

const customize = custom['components/App'] || ((x) =>x);

export default customize(App);
