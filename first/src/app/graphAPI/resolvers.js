/* eslint-disable no-undef */
/* eslint-disable no-return-await */
const jwt = require('jsonwebtoken');
const db = require('../../database/connect');

const users = db('users');
const { secret, getUserId } = require('./utils');

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
    async signup(parent, args, context, info) {
      const user = await users.returning('*').insert({
        name: args.name,
        email: args.email,
        password: args.password,
      });

      const token = jwt.sign({ id: user[0].id }, secret);

      return { token, user: user[0] };
    },

    async login(parent, args, context, info) {
      const user = await users
        .select('*')
        .where('email', args.email)
        .first();
      if (!user) {
        throw new Error('No such user found');
      }
      const token = jwt.sign({ id: user.id }, secret);

      return { user, token };
    },

    async createUser(_, { input }) {
      const check = await db('users')
        .select('*')
        .where('name', input.name);
      if (check.length !== 0) {
        throw new Error(`the user ${input.name} already exists`);
      }
      const result = await users.returning('id').insert({
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
