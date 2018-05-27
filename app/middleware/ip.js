const requestIP = require('request-ip')
const express = require('express')

// get ip with request-ip
Object.defineProperty(express.request, 'ip', {
  configurable: true,
  enumerable: true,
  get: function ip () {
    return requestIP.getClientIp(this)
  }
})

