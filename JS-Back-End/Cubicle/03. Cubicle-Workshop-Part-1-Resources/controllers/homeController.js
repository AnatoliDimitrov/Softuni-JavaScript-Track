const router = require('express').Router();
const service = require('../services/homeService');

router.get('/', async (req, res) => {
    let {search, from, to} = req.query;
    let cubes = await service.getCubes(search, from, to);
    res.render('index', { cubes, search, from, to });
});

router.get('/about', (req, res) => {
    res.render('about');
});

module.exports = router;