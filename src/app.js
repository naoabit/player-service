const cors = require('cors');
const dotenv = require('dotenv');
const express = require('express');
const { json, urlencoded } = require('body-parser');
const routers = require('./route');

dotenv.config();

const loadApp = async () => {
    const app = express();
    app.use(cors());
    app.use(json());
    app.use(urlencoded({ extended: true }));
    app.use(routers);

    app.listen(process.env.SERVER_PORT, () => {
        console.log(`App listening on port ${process.env.SERVER_PORT} ...`); // eslint-disable-line
    });

    return app;
};

module.exports = loadApp();
