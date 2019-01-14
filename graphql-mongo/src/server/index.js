import express from 'express';
import expressGraphQL from 'express-graphql';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import settings from '../app/config/settings';

import schema from '../app/graphql/index';

const app = express();
// Connect to MongoDB with Mongoose.
mongoose
  .connect(
    settings.db,
    {
      useCreateIndex: true,
      useNewUrlParser: true,
    },
  )
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use(
  '/graphql',
  cors(),
  bodyParser.json(),
  expressGraphQL({
    schema,
    graphiql: true,
  }),
);

app.listen(settings.port, () => console.log(`Server running on port ${settings.port}`));
