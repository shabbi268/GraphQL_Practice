const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./Schema/schema');

const app = express();

app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema
}))

app.listen(4000, () => {
    console.log('Started Listening on Port 4000')
});