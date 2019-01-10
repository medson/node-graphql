// eslint-disable-next-line func-names
exports.up = function (knex, Promise) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary();
    table.string('name', 80).notNullable();
    table.string('email', 80).notNullable();
    table.string('password', 80).notNullable();
  });
};

// eslint-disable-next-line func-names
exports.down = function (knex, Promise) {
  return knex.schema.dropTable('users');
};
