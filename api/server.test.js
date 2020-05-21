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

  describe("POST to pokemon database", () => {
    it("POST /pokemon", async () => {
      const body = { name: "test pokemon", type: "water" };
      const res = await supertest(server).post("/pokemon").send(body);

      expect(res.statusCode).toBe(201);
      expect(res.type).toBe("application/json");
    });
  });

  describe("Delete from pokemon database", () => {
    it("should DELETE /pokemon/:id", () => {
      return supertest(server)
        .delete("/pokemon/1")
        .then((res) => {
          expect(res.status).toBe(200);
          expect(typeof res.body).toBe("number");
        });
    });
  });
});
