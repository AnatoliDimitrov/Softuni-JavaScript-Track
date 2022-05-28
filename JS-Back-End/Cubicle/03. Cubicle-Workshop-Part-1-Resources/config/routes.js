const express = require('express');
const router = express.Router();

const homeController = require('../controllers/homeController');
const createController = require('../controllers/createController');

router.use('/', homeController);
router.use('/create', createController);

module.exports = router; 