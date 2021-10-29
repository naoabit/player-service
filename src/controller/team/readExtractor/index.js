const playerExtractor = require('../../player/extractor');

module.exports = (team, players) => ({
    id: team.id,
    coach: team.coach,
    year: team.year,
    players: players.map(playerExtractor),
});
