const router = require('express').Router();

const userController = require('./controllers/userController');
const nftController = require('./controllers/nftController');

router.use('/user', userController);
router.use('/nfts', nftController);

module.exports = router;