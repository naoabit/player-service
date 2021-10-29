const express = require('express');
const teamController = require('../../controller/team');

const router = express.Router();

router.get('/api/team/:year', teamController.read);

module.exports = router;