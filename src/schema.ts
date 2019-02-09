import { makeExecutableSchema } from 'graphql-tools';
import resolvers from './resolvers';

// The GraphQL schema in string form
const typeDefs = `
  type Query { books: [Book] }
  type Book { title: String, author: String }
`;

// Put together a schema
export default makeExecutableSchema({
  typeDefs,
  resolvers,
});