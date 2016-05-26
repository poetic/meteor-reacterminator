// custom
import React from 'react';
import _ from 'lodash';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import ParamStore from 'param-store';
import App from '../readonly-components/App.jsx';

const Loading = () => (
  <div>
    Please replace me with Loading component or a splash screen component.
  </div>
);

const Login = () => (
  <div>
    Please replace me with Login component.
  </div>
);

const PUBLIC_ROUTES = [];

class AppWrapper extends React.Component {
  render() {
    const {loggingIn, loggedIn} = this.props

    if (loggingIn) {
      return <Loading />;
    }

    const isPublicRoute = _.includes(PUBLIC_ROUTES, ParamStore.get('path'));
    const isAuthorized = isPublicRoute || loggedIn;

    if (!isAuthorized) {
      return <Login />;
    }

    return <App />
  }
}

const AppWrapperWithContainer = createContainer(() => {
  return {
    loggingIn: Meteor.loggingIn(),
    loggedIn: Boolean(Meteor.user())
  }
}, AppWrapper)

export default AppWrapperWithContainer;
