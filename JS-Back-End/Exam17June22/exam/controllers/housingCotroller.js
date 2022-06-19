const router = require('express').Router();
const { create, getOne, getAll, edit, deleteElement, rentElement } = require('../services/housingService');
const { isAuthenticated } = require('../middlewares/userMiddleware');
const { default: mongoose } = require('mongoose');

router.get('/create', isAuthenticated, async (req, res) => {
    res.render('housing/create');
});

router.get('/rent', async (req, res) => {
    const all = await getAll();
    res.render('housing/rent', { all });
});

router.post('/create', isAuthenticated, async (req, res) => {

    if (req.body.name == '' || req.body.type == '' || req.body.city == '' || req.body.homeImage == '' || req.body.description == '' || req.body.pieces == '' || req.body.year == '') {
        return res.render('housing/create', { error: 'All fields are required!' });
    }

    req.body.year = Number(req.body.year);
    req.body.pieces = Number(req.body.pieces);

    const housing = await create(req.user.id, req.body);

    if (housing.message) {
        return res.render('housing/create', { error: housing.message });
    }

    res.redirect('/housing/rent');
});

router.get('/details/:id', async (req, res) => {
    const element = await getOne(req.params.id);

    if (element.message) {
        return res.render(`housing/details${req.params.id}`, { error: element.message });
    }

    let isAuth = false;
    let isOwner = false;
    let rented = false;
    if (req.user) {
        isAuth = true;
    }

    if (isAuth) {
        if (req.user.id == element.owner._id) {
            isOwner = true;
        }
    }

    if (isAuth) {
        if (element.rentedHome.some(x => x._id == req.user.id)) {
            rented = true;
        }
    }

    let people = element.rentedHome.map(u => u.name);
    element.rentedUsers = people.join(', ');

    res.render('housing/details', { element, isAuth, isOwner, rented });
});

router.get('/edit/:id', isAuthenticated, async (req, res) => {
    const element = await getOne(req.params.id);

    if (element.message) {
        return res.render(`housing/details/${req.params.id}`, { error: element.message });
    }

    res.render(`housing/edit`, { ...element });
});

router.post('/edit/:id', isAuthenticated, async (req, res) => {

    await edit(req.params.id, req.body);


    res.redirect(`/housing/details/${req.params.id}`);
});

router.get('/delete/:id', isAuthenticated, async (req, res) => {
    const element = await getOne(req.params.id);

    if (element.message) {
        return res.render(`housing/details/${req.params.id}`, { error: element.message });
    }

    if (req.user.id == element.owner._id) {
        await deleteElement(req.params.id);
    }

    res.redirect(`/housing/rent`);
});

router.get('/rent/:id', isAuthenticated, async (req, res) => {
    const element = await getOne(req.params.id);

    if (element.message) {
        return res.render(`housing/details/${req.params.id}`, { error: element.message });
    }

    if (req.user.id != element.owner._id) {
        await rentElement(req.params.id, req.user.id);
    }

    res.redirect(`/housing/rent`);
});

module.exports = router;