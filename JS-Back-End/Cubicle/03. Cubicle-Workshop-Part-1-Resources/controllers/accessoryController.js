const router = require('express').Router();
const service = require('../services/accessoryService');
const cubeService = require('../services/cubeService');
const {isAuthenticated} = require('../middlewares/userMiddleware');

router.get('/create', isAuthenticated, async (req, res) => {
    res.render('createAccessory');
});

router.post('/create', isAuthenticated, async (req, res) => {
    await service.createAccessory(req.body);
    res.redirect('/');
});

router.get('/attach/:id', isAuthenticated, async (req, res) => {
    let cube = await cubeService.getCube(req);
    let accessories = await service.getAllWithoutIncluded(cube); 
    res.render('attachAccessory', {cube, accessories});
});

router.post('/attach', isAuthenticated, async (req, res) => {
    service.attachAccessory(req.body);
    res.redirect(`/cube/details/${req.body.cubeId}`);
});

module.exports = router;