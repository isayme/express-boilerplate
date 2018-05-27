const path = require('path')
require('app-module-path').addPath(path.resolve(__dirname, '..'))

const express = require('express')
const bodyParser = require('body-parser')
const config = require('config')
const logger = require('app/logger')
const partialResponse = require('express-partial-response')
const requestID = require('express-request-id')
const cookieParser = require('cookie-parser')
require('app/middleware/ip')

const app = express()

app.set('trust proxy', false)
app.use(require('app/middleware/logger'))
app.use(requestID())
app.use(cookieParser())
app.use(partialResponse())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(require('./middleware/cors'))

app.use(require('./router/version'))
app.use(require('./router/req'))

app.use(require('./middleware/error-handler'))

const server = app.listen(config.port, () => {
  const address = server.address()
  logger.info(`listen ${address.address}:${address.port}`)
})

module.exports = app
