class AbstractSequelizeRepository {
    /**
     * @param model
     */
    constructor(model) {
        this.model = model;
    }

    /**
     * Find one entities by given fields
     * @param {Object} fields to look for
     * @param {Array<String>} attributes - optional list of returned fields
     * @return {Promise} Entities
     */
     findOneByFields(fields, attributes) {
        return this.model.findOne({
            attributes,
            where: fields,
            raw: true,
        });
    }

    /**
     * Find all entities by given fields
     * @param {Object} fields to look for
     * @param {Array<String>} attributes - optional list of returned fields
     * @return {Promise} Entities
     */
        findByFields(fields, attributes) {
        return this.model.findAll({
            attributes,
            where: fields,
            raw: true,
        });
    }
}

module.exports = AbstractSequelizeRepository;
