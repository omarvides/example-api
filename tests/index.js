const superTest = require('supertest');

const app = require('../index');

describe('Endpoints', () => {
  describe('GET /', () => {
    it('respond with 200', (done) => {
      superTest(app)
        .get('/')
        .expect(200, done);
    });
  });
  describe('POST /', () => {
    it('should respond with 200 with an empty body', (done) => {
      superTest(app)
        .post('/')
        .expect(200, done);
    });
  });
});
