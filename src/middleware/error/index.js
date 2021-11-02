/* eslint-disable-next-line no-unused-vars */
module.exports = (error, req, res, next) => res.status(500).send({
    status: error.status,
    message: error.message,
});
