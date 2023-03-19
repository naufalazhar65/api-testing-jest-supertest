const axios = require('axios');

describe('GET /api/users', () => {
  it('should return a list of users', async () => {
    const response = await axios.get('https://reqres.in/api/users?page=1&per_page=1');
    const data = response.data;
    expect(data.data.length).toBeGreaterThan(0);
    expect(response.status).toBe(200);
    console.log(data)
  });
});

describe('POST /api/users', () => {
  it('should create a new user', async () => {
    const response = await axios.post('https://reqres.in/api/users', {
      name: 'John Doe',
      job: 'Software Engineer',
    });
    const data = response.data;
    expect(data.name).toBe('John Doe');
    expect(data.job).toBe('Software Engineer');
    expect(response.status).toBe(201);
    console.log(data)
  });
});

describe('PUT /api/users/:id', () => {
  it('should update an existing user', async () => {
    const response = await axios.put('https://reqres.in/api/users/2', {
      name: 'John Doe',
      job: 'Software',
    });
    const data = response.data;
    expect(data.name).toBe('John Doe');
    expect(data.job).toBe('Software');
    expect(response.status).toBe(200);
    console.log(data)
  });
});

describe('DELETE /api/users/:id', () => {
  it('should delete an existing user', async () => {
    const response = await axios.delete('https://reqres.in/api/users/2');
    expect(response.status).toBe(204);
    // console.log()
  });
});