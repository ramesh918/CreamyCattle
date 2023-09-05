import request from 'supertest';
import app from '../app';

describe('Your Controller Tests', () => {
  it('should return 200 OK on a valid request', async () => {
    const response = await request(app).get('/api/yourEndpoint');
    expect(response.status).toBe(200);
  });

  it('should return 400 Bad Request on an invalid request', async () => {
    const response = await request(app).post('/api/yourEndpoint').send({});
    expect(response.status).toBe(400);
  });
});
