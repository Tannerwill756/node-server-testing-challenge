exports.up = function (knex) {
  return knex.schema.createTable("pokemon", (tbl) => {
    tbl.increments();
    tbl.string("name", 128).notNullable();
    tbl.string("type", 128);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("pokemon");
};
