const server = require("./server");
const db = require("../data/dbconfig");

const supertest = require("supertest");

// afterEach(async () => {
//   await db("pokemon").truncate();
// });

describe("server", () => {
  it("can run the tests", () => {
    expect(true).toBeTruthy();
  });

  describe("POST /pokemon", async () => {
    const body = { name: "test pokemon", type: "water" };
    const res = await supertest(server).post("/pokemon").send(body);

    expect(res.statusCode).toBe(401);
  });
});
