describe('GET /api/users', () => {
    it('should return a list of users', async () => {
      const response = await fetch('https://reqres.in/api/users?page=2');
      const data = await response.json();
    //   expect(data.data.length).toBeGreaterThan(0);
      expect(response.status).toBe(200);
    });
  });
  
describe('POST /api/users', () => {
    it('should create a new user', async () => {
      const response = await fetch('https://reqres.in/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: 'John Doe',
          job: 'Software Engineer',
        }),
      });
      const data = await response.json();
      expect(data.name).toBe('John Doe');
      expect(data.job).toBe('Software Engineer');
      expect(response.status).toBe(201);
    });
  });
  
  describe('PUT /api/users/:id', () => {
    it('should update an existing user', async () => {
      const response = await fetch('https://reqres.in/api/users/2', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: 'John Doe',
          job: 'Software',
        }),
    });
      const data = await response.json();
      expect(data.name).toBe('John Doe');
      expect(data.job).toBe('Software');
      expect(response.status).toBe(200);
    });
  });
  
  describe('DELETE /api/users/:id', () => {
    it('should delete an existing user', async () => {
      const response = await fetch('https://reqres.in/api/users/2', {
        method: 'DELETE',
    });
        expect(response.status).toBe(204);
    });
});