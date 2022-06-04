const router = require('express').Router();
const service = require('../services/cubeService');

router.get('/create', (req, res) => {
    res.render('create');
})

router.post('/create', (req, res) => {
    service.addCube(req.body);
    res.redirect('/');
});

router.get('/details/:id', async (req, res) => {
    let cube = await service.getCube(req);
    res.render('details', {cube});
});

module.exports = router;