import ApolloClient from 'apollo-client';
import { meteorClientConfig } from 'meteor/apollo';
import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  const client = new ApolloClient(meteorClientConfig());
});
