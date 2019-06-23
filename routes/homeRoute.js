const apiControllers = require('../controllers/apiControllers');
const express = require('express');
const router = express.Router();



router.get('/', apiControllers.index);

module.exports = router;