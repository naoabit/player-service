const AbstractRepository = require('../abstract');
const TeamModel = require('../../database/model/team');

module.exports = new AbstractRepository(TeamModel);
