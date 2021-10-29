const { Sequelize } = require('sequelize');

const {
    database, user, password, host, port, driver,
} = require('../../config/database.js');

module.exports = new Sequelize(database, user, password, {
    host,
    port: parseInt(port, 10),
    dialect: driver,
    define: { timestamps: false },
    hooks: {
        afterUpdate: (instance) => {
            const hasProperty = Object.prototype
                .hasOwnProperty.call(instance, 'updatedAt');

            if (hasProperty) {
                instance.update({ updatedAt: new Date() });
            }
        },
    },
});
