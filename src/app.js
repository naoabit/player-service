const dotenv = require('dotenv');
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');

const routers = require('./route');

dotenv.config();

const loadApp = async () => {
    const app = express();
    app.use(bodyParser.json({ limit: '50mb' }));
    app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
    app.use(cors());
    app.use(routers);

    app.listen(process.env.SERVER_PORT, () => {
        console.log(`App listening on port ${process.env.SERVER_PORT} ...`); // eslint-disable-line
    });

    return app;
};

module.exports = loadApp();
