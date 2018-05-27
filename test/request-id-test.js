const request = require('supertest')
const assert = require('power-assert')
const app = require('../app/app')

describe('request id', () => {
  it('should ok', async () => {
    let res = await request(app).get('/version')
    assert.equal(res.statusCode, 200)
    assert.ok(typeof res.header['x-request-id'] === 'string')
  })
})
