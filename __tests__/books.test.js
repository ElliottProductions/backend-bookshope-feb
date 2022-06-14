const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('backend-express-template routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('/books should return a list of books', async () => {
    const res = await request(app).get('/books');
    expect(res.body[0]).toEqual({ 'id':'1', 'title':'Lord of the Things', 'released':1922 });
  });
  it('/books/:id should return a single book', async () => {
    const res = await request(app).get('/books/1');
    expect(res.body).toEqual({ 'id':'1', 'title':'Lord of the Things', 'released':1922 });
  });
  afterAll(() => {
    pool.end();
  });
});
