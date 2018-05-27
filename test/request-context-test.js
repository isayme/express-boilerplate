const request = require('supertest')
const assert = require('power-assert')
const app = require('../app/app')

describe('request context', () => {
  it('should ok', async () => {
    let res = await request(app)
      .post('/anything?q=query')
      .set({ 'X-Header': 'x-header' })
      .set({ Cookie: 'u=n' })
      .send({ k: 'v' })
    assert.equal(res.statusCode, 200)
    assert.equal(res.body.headers['x-header'], 'x-header')
    assert.equal(res.body.query.q, 'query')
    assert.equal(res.body.body.k, 'v')
    assert.equal(res.body.cookies.u, 'n')
  })
})
