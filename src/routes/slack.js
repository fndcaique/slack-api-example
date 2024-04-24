// src/routes/slack.js
const express = require("express");
const { handle } = require("../controllers/slack");

const routes = express.Router();

routes.post("/", handle);

module.exports = routes;