const router = require('express').Router();
const { createPublication, getOnePublication, addShare, deletePublication, editPublication } = require('../services/publicationService');
const { isAuthenticated } = require('../middlewares/userMiddleware');
const { default: mongoose } = require('mongoose');

router.get('/create', isAuthenticated, async (req, res) => {
    res.render('publication/create');
});

router.post('/create', async (req, res) => {

    if (req.body.title == '' || req.body.paintingTechnique == '' || req.body.artPicture == '' || req.body.certificateOfAuthenticity == '') {
        return res.render('publication/create', { error: 'All fields are required!' });
    }

    const pub = await createPublication(req.user.id, req.body);

    if (pub.message) {
        return res.render('publication/create', { error: pub.message });
    }

    res.redirect('/gallery');
});

router.get('/details/:id', async (req, res) => {
    const pub = await getOnePublication(req.params.id);
    let isAuth = false;
    let isOwner = false;
    let shared = false;
    if (req.user) {
        isAuth = true;
    }

    if (isAuth) {
        if (req.user.id == pub.author._id) {
            isOwner = true;
        }
    }

    if (isAuth) {
        if (pub.usersShared.some(x => x._id == req.user.id)) {
            shared = true;
        }
    }

    res.render('publication/details', { pub, isAuth, isOwner, shared });
});

router.get('/share/:id', async (req, res) => {
    const pub = await getOnePublication(req.params.id);

    await addShare(req.params.id, req.user.id);

    res.redirect(`/publication/details/${pub._id}`);
});

router.get('/edit/:id', async (req, res) => {
    const pub = await getOnePublication(req.params.id);

    res.render(`publication/edit`, {...pub});
});

router.post('/edit/:id', async (req, res) => {

    await editPublication(req.params.id, req.body);

    res.redirect(`/publication/details/${req.params.id}`);
});

router.get('/delete/:id', async (req, res) => {
    const pub = await getOnePublication(req.params.id);
    let isAuth = false;
    if (req.user) {
        isAuth = true;
    }

    if (isAuth) {
        if (req.user.id == pub.author._id) {
            await deletePublication(req.params.id);
        }
    }

    res.redirect(`/gallery`);
});

module.exports = router;