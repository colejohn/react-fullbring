require('dotenv').config();
const graphqlHTTP = require('express-graphql');
import { GraphQLServer, PubSub } from 'graphql-yoga';
import mongoose from 'mongoose';

import schema from './graphql';
import { models } from './models';

const { mongoURI: db } = process.env;
const pubsub = new PubSub();
const options = {
	port: process.env.PORT || '4000',
	endpoint: '/graphql',
	subscriptions: '/subscriptions',
	playground: '/playground',
	cors: {
		origin: '*',
		credentials: true
	}
};
const context = {
	models,
	pubsub
};
// Connect to MongoDB with Mongoose.
mongoose
	.connect(db, {
		useCreateIndex: true,
		useNewUrlParser: true
	})
	.then(() => console.log('MongoDB connected'))
	.catch((err) => console.log(err));

const server = new GraphQLServer({
	schema,
	context
});
server.start(options, ({ port }) => {
	console.log(`🚀 Server is running on http://localhost:${port}`);
});
