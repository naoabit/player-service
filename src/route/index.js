const express = require('express');
const team = require('./team');
const player = require('./player');

const globalRouter = express.Router();

globalRouter.use(team);
globalRouter.use(player);

module.exports = globalRouter;
