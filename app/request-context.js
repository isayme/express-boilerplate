const constants = require('app/constants')

class RequestContext {
  constructor (req) {
    this.req = req
  }

  get method () {
    return this.req.method
  }

  get url () {
    // https://stackoverflow.com/a/7507507/1918831
    return `${this.req.protocol}://${this.req.headers.host}${this.req.url}`
  }

  get ip () {
    return this.req.ip || constants.UnKnown
  }

  get headers () {
    return this.req.headers
  }

  get ua () {
    return this.headers['user-agent'] || constants.UnKnown
  }

  get query () {
    return this.req.query
  }

  get text () {
    if (this.req.is('text/*')) {
      return this.req.body
    }
  }

  get body () {
    if (this.req.is('json')) {
      return this.req.body
    }
    return {}
  }

  get form () {
    if (this.req.is('application/x-www-form-urlencoded')) {
      return this.req.body
    }
    return {}
  }

  get files () {
    if (!this.req.files) {
      return {}
    }

    return this.req.files.reduce((files, file) => {
      files[file.fieldname] = file.buffer.toString()
      return files
    }, {})
  }

  get cookies () {
    return this.req.cookies
  }

  get lang () {
    return this.req.locale
  }

  get welcome () {
    return this.req.__('welcome')
  }

  toJSON () {
    return {
      method: this.method,
      url: this.url,
      ip: this.ip,
      headers: this.headers,
      ua: this.ua,
      query: this.query,
      text: this.text,
      body: this.body,
      form: this.form,
      files: this.files,
      cookies: this.cookies,
      lang: this.lang,
      welcome: this.welcome
    }
  }
}

module.exports = RequestContext
