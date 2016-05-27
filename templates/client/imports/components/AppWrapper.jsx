// custom
import React from 'react';
import _ from 'lodash';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import ParamStore from 'param-store';
import App from './App';
import Index from './Index'

const PUBLIC_ROUTES = [
  'login',
];

class AppWrapper extends React.Component {
  isAuthorized({loggingIn, loggedIn}) {
    const isPublicRoute = _.includes(PUBLIC_ROUTES, ParamStore.get('path'));
    return isPublicRoute || loggedIn;
  }

  redirectToLoginWhenUnauthorized({loggingIn, loggedIn}) {
    if (loggingIn) {
      return;
    }

    if (!this.isAuthorized({loggingIn, loggedIn})) {
      ParamStore.set({path: 'login'})
    }
  }

  componentWillMount() {
    this.redirectToLoginWhenUnauthorized(this.props)
  }

  componentWillReceiveProps(nextProps) {
    this.redirectToLoginWhenUnauthorized(nextProps)
  }

  render() {
    const {loggingIn, loggedIn} = this.props

    if (loggingIn || !this.isAuthorized({loggingIn, loggedIn})) {
      return <Index noRedirect={true} />;
    }

    return <App />;
  }
}

const AppWrapperWithContainer = createContainer(() => {
  return {
    loggingIn: Meteor.loggingIn(),
    loggedIn: Boolean(Meteor.user())
  }
}, AppWrapper)

export default AppWrapperWithContainer;
