module.exports = (err, req, res, next) => {
  const statusCode = err.status || err.statusCode || 500

  res.status(statusCode).json({
    name: err.name,
    message: err.message,
    stack: err.stack
  })
}
