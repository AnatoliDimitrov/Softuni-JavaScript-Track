const router = require('express').Router();
const service = require('../services/homeService');

router.get('/', (req, res) => {
    let {search, from, to} = req.query;
    let cubes = service.getCubes(search, from, to);
    res.render('index', { cubes, search, from, to });
});

router.get('/about', (req, res) => {
    res.render('about');
});

router.get('/details/:id', (req, res) => {
    let cube = service.getCubes().filter(c => c.id === req.params.id)[0];
    res.render('details', {cube});
})

module.exports = router;