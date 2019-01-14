export default `
  type User {
    id: String!@unique
    name: String!
    email: String!@unique
    password: String!
  }
  type Query {
    user(id: String, name: String): User
    users: [User]
  }
  type Mutation {
    signup(email: String!, password: String!): AuthPayload
    addUser(id: String!, name: String!, email: String!): User
    editUser(id: String, name: String, email: String): User
    deleteUser(id: String, name: String, email: String): User
  }
`;
