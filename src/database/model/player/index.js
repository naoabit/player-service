const { Model, DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

const Team = require('../team');

class Player extends Model {
    static init() {
        super.init({
            id: {
                type: DataTypes.INTEGER(11),
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            number: {
                type: DataTypes.INTEGER(11),
                allowNull: true,
                field: 'number',
                defaultValue: null,
            },
            name: {
                type: DataTypes.STRING(255),
                allowNull: true,
                field: 'name',
                defaultValue: null,
            },
            lastName: {
                type: DataTypes.STRING(255),
                allowNull: true,
                field: 'last_name',
                defaultValue: null,
            },
            position: {
                type: DataTypes.STRING(255),
                allowNull: true,
                field: 'position',
                defaultValue: null,
            },
            isCaptain: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                field: 'is_captain',
                defaultValue: false,
            },
            teamId: {
                type: DataTypes.INTEGER(11),
                allowNull: false,
                field: 'team_id',
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
            tableName: 'player',
        });
    }
}


Player.init();
Player.belongsTo(Team, {
    foreignKey: 'teamId',
    targetKey: 'id',
    as: 'team',
});
Team.hasMany(Player, {
    foreignKey: 'teamId',
    targetKey: 'id',
    as: 'players',
});

module.exports = Player;
