const express = require('express');
const profController = require('../controllers/professional');
const router = express.Router();

router.get('/', profController.getData);

module.exports = router;