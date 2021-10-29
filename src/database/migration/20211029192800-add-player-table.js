exports.up = (db) => db.createTable('player', {
    id: {
        type: 'int',
        notNull: true,
        primaryKey: true,
        autoIncrement: true,
    },
    number: {
        type: 'int',
        defaultValue: null,
    },
    name: {
        type: 'string',
        length: 255,
        defaultValue: null,
    },
    last_name: {
        type: 'string',
        length: 255,
        defaultValue: null,
    },
    position: {
        type: 'string',
        length: 255,
        defaultValue: null,
    },
    is_captain: {
        type: 'boolean',
        notNull: true,
        defaultValue: false,
    },
    team_id: {
        type: 'int',
        notNull: true,
        foreignKey: {
            mapping: 'id',
            name: 'team_player_id_fk',
            table: 'team',
            rules: {
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            },
        },
    },
    created_at: {
        type: 'datetime',
        notNull: true,
        defaultValue: 'CURRENT_TIMESTAMP',
    },
    updated_at: {
        type: 'datetime',
        notNull: true,
        defaultValue: 'CURRENT_TIMESTAMP',
    },
});

exports.down = (db) => db.dropTable('player');
