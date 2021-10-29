const {
    DB_HOST, DB_PORT, DB_USER, DB_PWD, DB_NAME, DB_DRIVER,
} = process.env;

module.exports = {
    driver: DB_DRIVER,
    database: DB_NAME,
    user: DB_USER,
    password: DB_PWD,
    host: DB_HOST,
    port: DB_PORT,
};
