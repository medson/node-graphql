const { makeExecutableSchema } = require('graphql-tools');
const resolvers = require('./resolvers');

const usersAttribs = `
    id: ID
    name: String!
    email: String!
    password: String!
`;

const typeDefs = `
    type User {
      ${usersAttribs}
    }
    type AuthPayload {
        token: String
        user: User
    }
    type Query {
        getUser(id: ID!): User
        getUsers: [User]
    }
    input UserInput {
      ${usersAttribs}
    }
    type Mutation {
        signup(email: String!, password: String!, name: String!): AuthPayload
        login(email: String!, password: String!): AuthPayload
        createUser(input: UserInput): User
    }
`;

module.exports = makeExecutableSchema({
  typeDefs,
  resolvers,
});
