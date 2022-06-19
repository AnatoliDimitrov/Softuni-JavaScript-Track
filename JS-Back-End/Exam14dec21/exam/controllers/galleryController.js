const router = require('express').Router();
const { getAllLeaned } = require('../services/galleryService');

router.get('/', async (req, res) => {
    const publications = await getAllLeaned();

    if (publications.message) {
        return res.render(`gallery`, { error: pub.message });
    }

    res.render('gallery', { publications });
});

module.exports = router;