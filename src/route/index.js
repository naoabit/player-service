const express = require('express');
const team = require('./team');

const globalRouter = express.Router();

globalRouter.use(team);

module.exports = globalRouter;
