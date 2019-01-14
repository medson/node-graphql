const envPath = process.env.NODE_ENV
  ? `./src/config/.env.${process.env.NODE_ENV}`
  : './src/app/config/.env';

require('dotenv').config({ path: envPath });

module.exports = {
  db: process.env.DB_HOST,
  port: process.env.PORT || 4000,
};
