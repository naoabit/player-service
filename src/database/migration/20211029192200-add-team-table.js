exports.up = (db) => db.createTable('team', {
    id: {
        type: 'int',
        notNull: true,
        primaryKey: true,
        autoIncrement: true,
    },
    coach: {
        type: 'string',
        length: 255,
        notNull: true,
    },
    year: {
        type: 'int',
        notNull: true,
        unique: true,
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

exports.down = (db) => db.dropTable('team');
