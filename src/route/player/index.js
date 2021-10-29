const express = require('express');
const playerController = require('../../controller/player');

const router = express.Router();

router.post('/api/player/:year', playerController.create);

module.exports = router;