const router = require('express').Router();
const { getAllLeaned } = require('../services/galleryService');

router.get('/', async (req, res) => {
    const publications = await getAllLeaned();
    res.render('gallery', { publications });
});

module.exports = router;