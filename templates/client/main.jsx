import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

function Placeholder() {
  return (
    <h1 style={{ color: 'black', background: 'white' }}>
      React is working!
      <br />
      (find me at ./client/imports/main.jsx)
    </h1>
  );
}

Meteor.startup(() => {
  render(<Placeholder />, document.getElementById('render-target'));
});
