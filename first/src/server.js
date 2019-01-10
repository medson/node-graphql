const express = require('express');
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');
const schema = require('./app/graphAPI/schema');
// const settings = require('./config/settings');

class App {
  constructor() {
    this.express = express();
    this.isDev = process.env.NODE_ENV !== 'production';

    // this.database();
    this.middlewares();
    this.routes();
  }

  // database() {
  //   // eslint-disable-next-line global-require
  //   this.express.use(require('knex')(settings.db));
  // }

  middlewares() {
    this.express.use(express.json());
  }

  routes() {
    // eslint-disable-next-line global-require
    this.express.use(
      '/api',
      graphqlHTTP({
        schema,
        graphiql: true,
      }),
    );
  }
}

module.exports = new App().express;
