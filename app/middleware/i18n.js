const i18n = require('i18n')
const config = require('config')

i18n.configure({
  locales: config.i18n.locales,
  cookie: 'lang',
  queryParameter: 'lang',
  directory: './locales'
})

module.exports = i18n.init
