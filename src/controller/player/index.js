const {
    CREATED,
    NOT_FOUND,
} = require('http-status');

const teamRepository = require('../../repository/team');
const playerRepository = require('../../repository/player');

class Player {
    /**
     * @param {object} req
     * @param {object} res
     * @param {function} next
     */
    async create(req, res, next) {
        try {
            const { year } = req.params;
            const playerData = req.body;
            console.log(playerData);
            const team = await teamRepository.findOneByFields({ year: parseInt(year) });

            if (!team) {
                throw new Error(`${NOT_FOUND}: The team does not exist`);
            }

            const player = await playerRepository.create({
                ...playerData,
                teamId: team.id,
            });

            return res.status(CREATED).send(player);
        } catch (e) {
            return next(e);
        }
    }
}

module.exports = new Player();
