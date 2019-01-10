/* eslint-disable no-undef */
/* eslint-disable no-return-await */
const db = require('../../database/connect');

module.exports = {
  Query: {
    async getUser(_, { id }) {
      return await db('users')
        .where({ id })
        .first();
    },
    async getUsers() {
      return await db('users');
    },
  },
  Mutation: {
    async createUser(_, { input }) {
      const result = await db('users')
        .returning('id')
        .insert({
          name: input.name,
          email: input.email,
          password: input.password,
        });

      return await db('users')
        .where({ id: result[0] })
        .first();
    },
  },
};
