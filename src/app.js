const express = require('express')
const models = require('./models')
const app = express()
const { utils } = require('./helpers')

app.use((req, res, next) => {
  req.models = models
  next()
})

app.get('/', (req, res, next) => {
  res.send({ success: true })
})

app.get('/install', (req, res, next) => {
  if (utils.isDev()) {
    require('./install')(req.models)
      .then(result => res.send(result))
      .catch(next)
  } else {
    throw new Error('Forbidden')
  }
})

app.use((err, req, res, next) => {
  const statusCode = err.status || 500
  let message = err.message
  if (err.errors) {
    message = err.errors.map(i => res.__(i.message)).join(', ')
  }
  const error = utils.isDev() ? err : {}
  const success = false
  res.status(statusCode)
  res.send({ success, message, error })
})

module.exports = app
