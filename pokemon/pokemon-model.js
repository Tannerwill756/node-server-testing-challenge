const db = require("../data/dbconfig");

module.exports = {
  add,
  remove,
  getAll,
  getById,
};

function getAll() {
  return db("pokemon");
}

function add(pk) {
  return db("pokemon").insert(pk, "id");
}

function getById(id) {
  return db("pokemon").where({ id }).first();
}

function remove(id) {
  return db("pokemon").where({ id }).del();
}
