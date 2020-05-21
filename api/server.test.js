const server = require("./server");
const db = require("../data/dbconfig");

const supertest = require("supertest");

afterEach(async () => {
  await db("pokemon").truncate();
});

describe("server", () => {
  it("can run the tests", () => {
    expect(true).toBeTruthy();
  });
});
