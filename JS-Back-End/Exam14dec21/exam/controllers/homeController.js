const router = require('express').Router();

router.get('/', async (req, res) => {
    res.render('home');
});

router.get('/profile', (req, res) => {
    res.render('home/profile');
});

module.exports = router;