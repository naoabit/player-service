exports.up = (db) => Promise.all([
    db.insert('player', ['name', 'last_name', 'number', 'position', 'is_captain', 'team_id'], ['Jean', 'Jacques', 1, 'centre', false, 1]),
    db.insert('player', ['name', 'last_name', 'number', 'position', 'is_captain', 'team_id'], ['Jeanne', 'Janette', 5, 'left', true, 1]),
    db.insert('player', ['name', 'last_name', 'number', 'position', 'is_captain', 'team_id'], ['Claude', 'Claudette', 11, 'right', false, 2]),
    db.insert('player', ['name', 'last_name', 'number', 'position', 'is_captain', 'team_id'], ['Jocelyne', 'Jaquot', 2, 'defense', false, 2]),
    db.insert('player', ['name', 'last_name', 'number', 'position', 'is_captain', 'team_id'], ['Marie', 'Thomas', 4, 'attack', true, 3]),
    db.insert('player', ['name', 'last_name', 'number', 'position', 'is_captain', 'team_id'], ['Thomas', 'Carpentier', 9, 'centre', false, 3]),
]);

exports.down = (db) => db.runSql('DELETE FROM player WHERE team_id IN(1, 2, 3)');
