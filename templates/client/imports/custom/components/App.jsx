import React from 'react';
import _ from 'lodash';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import ParamStore from 'param-store';
import subscribeAll from 'meteor/poetic:meteor-subscribe-all';

export default (Base) => {
  class App extends React.Component {
    constructor (props) {
      super(props);

      this.state = {
        path: ParamStore.get('path')
      }

      ParamStore.listen(
        'path',
        ({changedParams}) => {
          this.setState({path: changedParams['path']});
        }
      );
    }

    render() {
      const { loading, loggedIn } = this.props;

      // TODO: make sure you have 'loading' path
      if (loading) {
        return <Base path='loading' />;
      }

      // TODO: put all routes that do not need authorization here
      const PUBLIC_ROUTES = [
        'login',
      ];

      const isNotAuthorizedPath =
        !loggedIn && !_.includes(PUBLIC_ROUTES, this.state.path);

      // TODO: make sure you have 'login' path, or change login to the correct path name
      if (isNotAuthorizedPath) {
        return <Base path='login' />;
      }

      return <Base />;
    }
  }

  // TODO: put all subscriptions you need before rendering the app
  const GLOBAL_SUBSCRIPTIONS = [];

  const allSubscriptionsReady = subscribeAll(GLOBAL_SUBSCRIPTIONS);

  const AppWithData = createContainer(() => {
    const loggedIn = Boolean(Meteor.user())

    return {
      loading: Meteor.loggingIn() || (loggedIn && !allSubscriptionsReady.get()),
      loggedIn,
    }
  }, App);

  return AppWithData;
}
