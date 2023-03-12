const request = require("supertest");

describe("GET /api/users", () => {
  it("should return a list of users", async () => {
    const response = await request("https://reqres.in")
      .get("/api/users?page=2")
      .set("Accept", "application/json");
      
    expect(response.status).toBe(200);
    expect(response.body.page).toBe(2);
    expect(response.body.data).toBeDefined();
    expect(response.body.data.length).toBeGreaterThan(0);
  });
});

describe("POST /api/users", () => {
  it("should create a new user", async () => {
    const newUser = {
      name: "John Doe",
      job: "Software Engineer",
    };
    
    const response = await request("https://reqres.in")
      .post("/api/users")
      .send(newUser)
      .set("Content-Type", "application/json");
      
    expect(response.status).toBe(201);
    expect(response.body.name).toBe(newUser.name);
    expect(response.body.job).toBe(newUser.job);
  });
});

describe("PUT /api/users/:id", () => {
  it("should update a user", async () => {
    const response = await request("https://reqres.in")
      .put("/api/users/2")
      .send({
        name: "John",
        job: "Engineer"
      })
      .set("Accept", "application/json");
      
    expect(response.status).toBe(200);
    expect(response.body.name).toBe("John");
    expect(response.body.job).toBe("Engineer");
  });
});

describe("DELETE /api/users/:id", () => {
  it("should delete a user", async () => {
    const response = await request("https://reqres.in")
      .delete("/api/users/2")
      .set("Accept", "application/json");
      
    expect(response.status).toBe(204);
  });
});