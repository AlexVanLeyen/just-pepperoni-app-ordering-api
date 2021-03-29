/**
 * graphql/schema.js
 * 
 * This script makes use of graphql-tools to assemble the
 * GraphQL schema.
 */
const { makeExecutableSchema } = require('graphql-tools');
const typeDefs = require('./typedefs');
const resolvers = require('./resolvers');

module.exports = makeExecutableSchema({typeDefs, resolvers});