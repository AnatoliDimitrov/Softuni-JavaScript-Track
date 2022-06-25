const router = require('express').Router();
const { create, getOne, getAll, edit, deleteElement, buyElement, createOptions } = require('../services/cryptoService');
const { isAuthenticated } = require('../middlewares/userMiddleware');
const { default: mongoose } = require('mongoose');

router.get('/create', isAuthenticated, async (req, res) => {
    res.render('crypto/create');
});

router.get('/catalog', async (req, res) => {
    const all = await getAll();
    res.render('crypto/catalog', { all });
});

router.post('/create', isAuthenticated, async (req, res) => {

    if (req.body.name == '' || req.body.image == '' || req.body.price == '' || req.body.description == '' || req.body.paymentMethod == '') {
        return res.render('crypto/create', { error: 'All fields are required!' });
    }

    req.body.price = Number(req.body.price);

    const crypto = await create(req.user.id, req.body);

    if (crypto.message) {
        return res.render('crypto/create', { error: crypto.message });
    }

    res.redirect('/crypto/catalog');
});

router.get('/details/:id', async (req, res) => {
    const element = await getOne(req.params.id);

    if (element.message) {
        return res.render(`crypto/details${req.params.id}`, { error: element.message });
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
        if (element.buyers.some(x => x._id == req.user.id)) {
            rented = true;
        }
    }

    let people = element.buyers.map(u => u.email);
    element.rentedUsers = people.join(', ');

    res.render('crypto/details', { element, isAuth, isOwner, rented });
});

router.get('/edit/:id', isAuthenticated, async (req, res) => {
    const element = await getOne(req.params.id);
    let options = createOptions(element.paymentMethod);

    if (element.message) {
        return res.render(`crypto/details/${req.params.id}`, { error: element.message });
    }

    res.render(`crypto/edit`, { element, options });
});

router.post('/edit/:id', isAuthenticated, async (req, res) => {

    const result = await edit(req.params.id, req.body);

    if (result) {
        return res.render(`crypto/details/${req.params.id}`, { error: result.message });
    }

    res.redirect(`/crypto/details/${req.params.id}`);
});

router.get('/delete/:id', isAuthenticated, async (req, res) => {
    const element = await getOne(req.params.id);

    if (element.message) {
        return res.render(`crypto/details/${req.params.id}`, { error: element.message });
    }

    if (req.user.id == element.owner._id) {
        await deleteElement(req.params.id);
    }

    res.redirect(`/crypto/catalog`);
});

router.get('/buy/:id', isAuthenticated, async (req, res) => {
    const element = await getOne(req.params.id);

    if (element.message) {
        return res.render(`crypto/details/${req.params.id}`, { error: element.message });
    }

    if (req.user.id != element.owner._id) {
        await buyElement(req.params.id, req.user.id);
    }

    res.redirect(`/crypto/details/${element._id}`);
});

module.exports = router;