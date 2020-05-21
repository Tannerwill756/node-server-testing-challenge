const express = require("express");

const Pokemon = require("../pokemon/pokemon-model");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({ api: "up" });
});

server.get("/pokemon", (req, res) => {
  Pokemon.getAll().then((pokemon) => {
    res.status(200).json(pokemon);
  });
});

server.get("/pokemon/:id", (req, res) => {
  Pokemon.getById(req.params.id).then((pokemon) => {
    res.status(200).json(pokemon);
  });
});

server.post("/pokemon", (req, res) => {
  Pokemon.add(req.body).then((pk) => {
    res.status(201).json(pk);
  });
});

server.delete("/pokemon/:id", (req, res) => {
  Pokemon.remove(req.params.id).then((del) => {
    res.json(del);
  });
});
module.exports = server;
