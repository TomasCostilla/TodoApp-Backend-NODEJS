const express = require('express')
const app = express()
const routes = require('../routes/routes')
const modules = require('../routes')
const apiRouter = routes(modules)

/* main mode */

app.use(apiRouter);

module.exports = app;