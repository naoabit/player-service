const dotenv = require('dotenv');
const express = require('express');
const routers = require('./route');

dotenv.config();

const loadApp = async () => {
    const app = express();
    app.use(routers);

    app.listen(process.env.SERVER_PORT, () => {
        console.log(`App listening on port ${process.env.SERVER_PORT} ...`); // eslint-disable-line
    });

    return app;
};

module.exports = loadApp();
