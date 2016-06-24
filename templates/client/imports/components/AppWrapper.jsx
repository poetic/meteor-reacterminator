import React from 'react';
import _ from 'lodash';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import ParamStore from 'param-store';
import App from './App';
import { ReactiveVar } from 'meteor/reactive-var';
import subscribeAll from '../subscribe-all';

class AppWrapper extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      path: ParamStore.get('path')
    }

    ParamStore.listen(
      'path',
      ({changedParams}) => {
        this.setState({activeLayerIndex: changedParams['path']});
      }
    );
  }

  render() {
    const { loading, loggedIn } = this.props;

    // TODO: make sure you have 'loading' path
    if (loading) {
      return <App path='loading' />;
    }

    // TODO: put all routes that do not need authorization here
    const PUBLIC_ROUTES = [
      'login',
    ];

    const isNotAuthorizedPath =
      !loggedIn && !_.includes(PUBLIC_ROUTES, this.state.path);

    // TODO: make sure you have 'login' path, or change login to the correct path name
    if (isNotAuthorizedPath) {
      return <App path='login' />;
    }

    return <App />;
  }
}

// TODO: put all subscriptions you need before rending the app
const GLOBAL_SUBSCRIPTIONS = [];

const allSubscriptionsReady = subscribeAll(GLOBAL_SUBSCRIPTIONS);

const AppWrapperWithData = createContainer(() => {
  const loggedIn = Boolean(Meteor.user())

  return {
    loading: Meteor.loggingIn() || (loggedIn && !allSubscriptionsReady.get()),
    loggedIn,
  }
}, AppWrapper);

export default AppWrapperWithData;
