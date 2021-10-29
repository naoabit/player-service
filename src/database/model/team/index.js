const { Model, DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

class Team extends Model {
    static init() {
        super.init({
            id: {
                type: DataTypes.INTEGER(11),
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            coach: {
                type: DataTypes.STRING(255),
                allowNull: false,
                field: 'coach',
            },
            year: {
                type: DataTypes.INTEGER(11),
                allowNull: false,
                field: 'year',
                unique: true,
            },
            createdAt: {
                type: DataTypes.DATE,
                allowNull: false,
                field: 'created_at',
                defaultValue: () => Date.now(),
            },
            updatedAt: {
                type: DataTypes.DATE,
                allowNull: false,
                field: 'updated_at',
                defaultValue: () => Date.now(),
            },
        }, {
            sequelize,
            tableName: 'team',
        });
    }
}

Team.init();

module.exports = Team;
