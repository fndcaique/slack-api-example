const express = require("express");
const slackRoutes = require("./slack");

const routes = express.Router();
routes.get('/', (req, res) => {

  res.send();
})
routes.use("/slack", slackRoutes);

module.exports = routes;