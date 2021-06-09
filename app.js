const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./Schema/schema');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://admin:admin@cluster0.rbpxi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', options = { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
    console.log('Connected to Database')
})


app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema
}))

app.listen(4000, () => {
    console.log('Started Listening on Port 4000')
});