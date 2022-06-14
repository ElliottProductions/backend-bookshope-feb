const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('backend-express-template routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('/authors should return a list of authors', async () => {
    const res = await request(app).get('/authors');
    expect(res.body[0]).toEqual({ 'id':'1', 'name':'J. R. R. Tolkien' });
  });

  afterAll(() => {
    pool.end();
  });
});
