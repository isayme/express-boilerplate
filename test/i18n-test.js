const request = require('supertest')
const assert = require('power-assert')
const app = require('app/app')

describe('i18n', () => {
  it('query', async () => {
    let res
    res = await request(app).get('/anything?lang=zh')
    assert.equal(res.body.lang, 'zh')
    assert.equal(res.body.welcome, '你好, 世界')

    res = await request(app).get('/anything?lang=en')
    assert.equal(res.body.lang, 'en')
    assert.equal(res.body.welcome, 'hello, world')
  })

  it('cookie', async () => {
    let res
    res = await request(app)
      .get('/anything')
      .set({ cookie: 'lang=zh' })
    assert.equal(res.body.lang, 'zh')

    res = await request(app)
      .get('/anything')
      .set({ cookie: 'lang=en' })
    assert.equal(res.body.lang, 'en')
  })
})
