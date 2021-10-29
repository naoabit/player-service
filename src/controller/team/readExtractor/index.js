module.exports = (team, players) => ({
    id: team.id,
    coach: team.coach,
    year: team.year,
    players: players.map((player) =>({
        id: player.id,
        number: player.number,
        name: player.name,
        lastName: player.lastName,
        position: player.position,
        isCaptain: player.isCaptain,
        teamId: player.teamId,
    })),
})