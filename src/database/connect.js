const settings = require('../config/settings');

// eslint-disable-next-line global-require
// eslint-disable-next-line import/order
const knex = require('knex')(settings.db);

module.exports = knex;
