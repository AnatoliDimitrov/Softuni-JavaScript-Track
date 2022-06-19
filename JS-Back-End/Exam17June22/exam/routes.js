const router = require('express').Router();

const homeController = require('./controllers/homeController');
const userController = require('./controllers/userController');
const housingController = require('./controllers/housingCotroller');

router.use('/', homeController);
router.use('/user', userController);
router.use('/housing', housingController);

module.exports = router;