const {
    CREATED,
    NOT_FOUND,
} = require('http-status');

const teamRepository = require('../../repository/team');
const playerRepository = require('../../repository/player');

const extractor = require('./extractor');

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

            const team = await teamRepository.findOneByFields({ year: parseInt(year, 10) });

            if (!team) {
                throw new Error(`${NOT_FOUND}: The team does not exist`);
            }

            const player = await playerRepository.create({
                ...playerData,
                teamId: team.id,
            });

            return res.status(CREATED).send(extractor(player));
        } catch (e) {
            return next(e);
        }
    }

    /**
     * @param {object} req
     * @param {object} res
     * @param {function} next
     */
    async updateCaptain(req, res, next) {
        try {
            const { id } = req.params;
            const { isCaptain } = req.body;

            const player = await playerRepository.updateByFields(
                { isCaptain },
                { id },
            );

            if (!player) {
                throw new Error(`${NOT_FOUND}: The player does not exist`);
            }

            return res.status(CREATED).send(extractor(player));
        } catch (e) {
            return next(e);
        }
    }
}

module.exports = new Player();
