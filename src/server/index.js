const express = require('express')
const app = express()
const routes = require('../routes')
const models = require('../routes/routes')
const apiRouter = routes(models)

/* develop mode */

app.use(apiRouter);

module.exports = app;