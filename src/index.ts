import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { schema } from './schemas/schema';
import { connectDB } from './config/db';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

connectDB();

const port = process.env.PORT || 5000;

app.use('/graphql', graphqlHTTP({
   schema,
   graphiql: process.env.NODE_ENV === 'dev',
}));

app.listen(port, () => console.log(`Server is running on port ${port}`));
