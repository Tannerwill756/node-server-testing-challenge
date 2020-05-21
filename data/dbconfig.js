const knex = require("knex");

require("dotenv").config();

const config = require("../knexfile.js");

const environment = process.env.NODE_ENV;

module.exports = knex(config[environment]);
