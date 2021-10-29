exports.up = (db) => Promise.all([
    db.insert('team', [ 'id', 'coach', 'year'], [1, 'Le coach', 2021]),
    db.insert('team', [ 'id', 'coach', 'year'], [2, 'Un autre coach', 2020]),
    db.insert('team', [ 'id', 'coach', 'year'], [3, 'Et un coach different', 2019]),
]);

exports.down = (db) => db.runSql('DELETE FROM team WHERE year IN(2021, 2020, 2019)');
