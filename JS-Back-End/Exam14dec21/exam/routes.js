const router = require('express').Router();

const homeController = require('./controllers/homeController');
const userController = require('./controllers/userController');
const galleryController = require('./controllers/galleryController');
const publicationController = require('./controllers/publicationController');

router.use('/', homeController);
router.use('/user', userController);
router.use('/gallery', galleryController);
router.use('/publication', publicationController);

module.exports = router;