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

router.get('/edit/:id', async (req, res) => {
    let cube = await service.getCube(req);
    let options = service.createOptions(cube.difficultyLevel);
    res.render('editCube', {cube, options});
});

router.post('/edit/:id', async (req, res) => {
    let cube = await service.getCube(req);
    res.redirect(`/cube/details/${cube._id}`);
});

router.get('/delete/:id', async (req, res) => {
    let cube = await service.getCube(req);
    let options = service.createOptions(cube.difficultyLevel);
    res.render('deleteCube', {cube, options});
});

router.post('/delete/:id', async (req, res) => {
    let cube = await service.getCube(req);
    res.redirect('/');
});

module.exports = router;