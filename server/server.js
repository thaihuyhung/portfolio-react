const express = require('express');
const expressGraphql = require('express-graphql');
// GraphQL schema
const schema = require('./schema.js');
const resolvers = require('./resolvers/index');
const MongoClient = require('mongodb').MongoClient;
const userName = 'user1';
const password = 'wxBsME4ldIvKXUk9';
const connectionString = `mongodb://${userName}:${password}@cluster0-shard-00-00-sibh7.mongodb.net:27017,cluster0-shard-00-01-sibh7.mongodb.net:27017,cluster0-shard-00-02-sibh7.mongodb.net:27017/information?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true`
let client;

const rootResolver = {
    profile: () => resolvers.profile(client)
};

// Create an express server and a GraphQL endpoint
const app = express();
app.use('/graphql', expressGraphql({
    graphiql: true,
    rootValue: rootResolver,
    schema
}));

(async function () {
    console.log('Connecting to MongoDB ...');
    try {
        client = await MongoClient.connect(connectionString, { useNewUrlParser: true });
        app.listen(3001, () => console.log('Express GraphQL Server Now Running On localhost:3001/graphql'));
    } catch (e) {
        throw Error(e);
    }
})();



