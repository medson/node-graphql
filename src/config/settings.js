const envPath = process.env.NODE_ENV
  ? `./src/config/.env.${process.env.NODE_ENV}`
  : './config/.env';

require('dotenv').config({ path: envPath });

const knexfile = require('../database/knexfile');

module.exports = {
  db: knexfile,
  port: process.env.PORT || 3000,
};
