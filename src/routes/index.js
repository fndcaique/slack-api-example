const express = require("express");
const slackRoutes = require("./slack");

const routes = express.Router();
routes.get('/', (req, res) => {
  res.send({ message: 'hello' });
})
routes.use("/slack", slackRoutes);

module.exports = routes;