const router = require('express').Router();
const controller = require('../controllers/nft');

router.get('/:nftId', controller.getNft);
router.get('', controller.getNfts);

router.post('', controller.addNft);

router.put('/:nftId', controller.updateNft);
router.delete('/:nftId', controller.deleteNft);

module.exports = router;
