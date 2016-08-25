import { createApolloServer } from 'meteor/apollo';
import schema from '../../apollo/schema';
import mocks from '../../apollo/mocks';
import resolvers from '../../apollo/resolvers';
import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  createApolloServer({
    graphiql: true,
    pretty: true,
    schema,
    resolvers,
    mocks,
  });
});

