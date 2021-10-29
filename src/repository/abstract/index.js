class AbstractSequelizeRepository {
    /**
     * @param model
     */
    constructor(model) {
        this.model = model;
    }

    /**
     * @param {object} modelData
     * @returns {Promise<object>}
     */
        create(modelData) {
        return this.model.create(modelData);
    }

    /**
     * Update an entity
     * @param {Object} data to update
     * @param {Object} fields to look for
     * @returns {Promise} The created entity
     */
    async updateByFields(data, fields) {
        await this.model.update(data, { where: fields });
        return this.model.findOne({ where: fields });
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
