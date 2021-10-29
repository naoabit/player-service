const AbstractRepository = require('../abstract');
const PlayerModel = require('../../database/model/player');

module.exports = new AbstractRepository(PlayerModel);
