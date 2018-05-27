const express = require('express')
const router = express.Router()
const RequestContext = require('app/request-context')

router.all('/anything', function (req, res) {
  const ctx = new RequestContext(req)

  res.json(ctx)
})

module.exports = router
