const graphqlHTTP = require('express-graphql');
const schema = require('./app/graphAPI/schema');

/**
 * Routes
 */
const routes = ('/api',
graphqlHTTP({
  schema,
  graphiql: true,
}));

module.exports = routes;
