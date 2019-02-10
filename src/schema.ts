const { gql } = require('apollo-server');

export default gql`
  type Query { 
    getUsers: [User]!
  }
  type User {
    id: String!,
    firstName: String!,
    lastName: String!,
    gender: String,
    email: String
  }
`;