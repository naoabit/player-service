const dotenv = require('dotenv');
const cors = require('cors');
const express = require('express');

const { json, urlencoded } = require('body-parser');

dotenv.config();

const routers = require('./route');
const errorMiddleware = require('./middleware/error');

const loadApp = async () => {
    const app = express();
    app.use(json());
    app.use(urlencoded());
    app.use(cors());
    app.use(routers);
    app.use(errorMiddleware);

    app.listen(process.env.SERVER_PORT, () => {
        console.log(`App listening on port ${process.env.SERVER_PORT} ...`); // eslint-disable-line
    });

    return app;
};

module.exports = loadApp();
