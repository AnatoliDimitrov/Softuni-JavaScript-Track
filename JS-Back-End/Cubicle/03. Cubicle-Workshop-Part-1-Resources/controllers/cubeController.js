const router = require('express').Router();
const service = require('../services/cubeService');
const { isAuthenticated } = require('../middlewares/userMiddleware');

router.get('/create', isAuthenticated, (req, res) => {
    res.render('create');
})

router.post('/create', isAuthenticated, (req, res) => {
    req.body.creator = req.user.id;
    service.addCube(req.body);
    res.redirect('/');
});

router.get('/details/:id', async (req, res) => {
    let cube = await service.getCube(req);
    let cubeOwner = false;
    if (req.user) {
        cubeOwner = cube.creator == req.user.id;
    }
    
    res.render('details', { cube, cubeOwner });
});

router.get('/edit/:id', isAuthenticated, async (req, res) => {
    let cube = await service.getCube(req);
    let options = service.createOptions(cube.difficultyLevel);
    console.log(req.user);
    res.render('editCube', { cube, options });
});

router.post('/edit/:id', isAuthenticated, async (req, res) => {
    let cube = await service.getCube(req);
    if (cube.creator == req.user.id) {
        let result = await service.editCube(req.params.id, req.body);
        return res.redirect(`/cube/details/${req.params.id}`);
    }
    res.redirect(`/`);
});

router.get('/delete/:id', isAuthenticated, async (req, res) => {
    let cube = await service.getCube(req);
    let options = service.createOptions(cube.difficultyLevel);
    res.render('deleteCube', { cube, options });
});

router.post('/delete/:id', isAuthenticated, async (req, res) => {
    let cube = await service.getCube(req);
    if (cube.creator == req.user.id) {
        if (await service.deleteCube(cube)) {
            res.redirect('/');
        } else {
            res.redirect('/404');
        }
    }
});

module.exports = router;