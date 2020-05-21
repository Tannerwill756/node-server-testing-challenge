exports.seed = function (knex) {
  return knex("pokemon").insert([
    { name: "Charizard", type: "fire" },
    { name: "Bulbasaur", type: "grass" },
    { name: "Squirtle", type: "water" },
  ]);
};
