const router = require('express').Router();
const { create, getOne, getAll, edit, deleteElement, joinElement } = require('../services/tripService');
const { isAuthenticated } = require('../middlewares/userMiddleware');
const { default: mongoose } = require('mongoose');

router.get('/create', isAuthenticated, async (req, res) => {
    res.render('trip/create');
});

router.get('/shared', async (req, res) => {
    const all = await getAll();
    res.render('trip/shared', { all });
});

router.post('/create', isAuthenticated, async (req, res) => {

    if (req.body.name == '' || req.body.type == '' || req.body.city == '' || req.body.homeImage == '' || req.body.description == '' || req.body.pieces == '' || req.body.year == '') {
        return res.render('trip/create', { error: 'All fields are required!' });
    }

    req.body.year = Number(req.body.year);
    req.body.pieces = Number(req.body.pieces);

    const trip = await create(req.user.id, req.body);

    if (trip.message) {
        return res.render('trip/create', { error: trip.message });
    }

    res.redirect('/trip/shared');
});

router.get('/details/:id', async (req, res) => {
    const element = await getOne(req.params.id);

    if (element.message) {
        return res.render(`trip/details${req.params.id}`, { error: element.message });
    }

    let isAuth = false;
    let isOwner = false;
    let rented = false;
    if (req.user) {
        isAuth = true;
    }

    if (isAuth) {
        if (req.user.id == element.creator._id) {
            isOwner = true;
        }
    }

    if (isAuth) {
        if (element.buddies.some(x => x._id == req.user.id)) {
            rented = true;
        }
    }

    let people = element.buddies.map(u => u.email);
    element.rentedUsers = people.join(', ');

    res.render('trip/details', { element, isAuth, isOwner, rented });
});

router.get('/edit/:id', isAuthenticated, async (req, res) => {
    const element = await getOne(req.params.id);

    if (element.message) {
        return res.render(`trip/details/${req.params.id}`, { error: element.message });
    }

    res.render(`trip/edit`, { ...element });
});

router.post('/edit/:id', isAuthenticated, async (req, res) => {

    await edit(req.params.id, req.body);


    res.redirect(`/trip/details/${req.params.id}`);
});

router.get('/delete/:id', isAuthenticated, async (req, res) => {
    const element = await getOne(req.params.id);

    if (element.message) {
        return res.render(`trip/details/${req.params.id}`, { error: element.message });
    }

    if (req.user.id == element.creator._id) {
        await deleteElement(req.params.id);
    }

    res.redirect(`/trip/shared`);
});

router.get('/join/:id', isAuthenticated, async (req, res) => {
    const element = await getOne(req.params.id);

    if (element.message) {
        return res.render(`trip/details/${req.params.id}`, { error: element.message });
    }

    if (req.user.id != element.creator._id) {
        await joinElement(req.params.id, req.user.id);
    }

    res.redirect(`/trip/shared`);
});

module.exports = router;