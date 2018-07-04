const requestIP = require('request-ip')

module.exports = requestIP.mw({
  attributeName: 'ip'
})
