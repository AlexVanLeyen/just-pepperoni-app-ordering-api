/**
 * server.js
 * 
 * This is the launch point for the server.
 */

require('dotenv').config();
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./src/graphql/schema');

const app = express();
app.use('/' + process.env.APP_GRAPHQL_ENDPOINT, graphqlHTTP({ schema, graphiql: true }));
app.listen(process.env.APP_PORT);
console.log('Running GraphQL API Server @ ' + process.env.APP_HOST + ':' + process.env.APP_PORT + '/' + process.env.APP_GRAPHQL_ENDPOINT);