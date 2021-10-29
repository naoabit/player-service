const {
    OK,
    NOT_FOUND,
} = require('http-status');

const teamRepository = require('../../repository/team');
const playerRepository = require('../../repository/player');

const readExtractor = require('./readExtractor');

class Team {
    /**
     * @param {object} req
     * @param {object} res
     * @param {function} next
     */
    async read(req, res, next) {
        try {
            const { year } = req.params;
            const team = await teamRepository.findOneByFields({ year: parseInt(year, 10) });

            if (!team) {
                throw new Error(`${NOT_FOUND}: The team does not exist`);
            }

            const players = await playerRepository.findByFields({ teamId: team.id });

            return res.status(OK).send(readExtractor(team, players));
        } catch (e) {
            return next(e);
        }
    }
}

module.exports = new Team();
