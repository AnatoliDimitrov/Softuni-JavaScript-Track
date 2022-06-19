const router = require('express').Router();
const { getAllLeaned } = require('../services/galleryService');
const { getOne } = require('../services/userService');
const { getAll } = require('../services/publicationService');
const { isAuthenticated } = require('../middlewares/userMiddleware');

router.get('/', async (req, res) => {
    const publications = await getAllLeaned();
    res.render('home', { publications });
});

router.get('/profile', isAuthenticated, async (req, res) => {
    const user = await getOne(req.user.id);

    if (user == null) {
        return res.render('home/profile', { error: 'Non existend user!' });
    }

    if (user.message) {
        return res.render('home/profile', { error: user.message });
    }

    let titles = user.myPublications.map(p => p.title);
    const pubs = await getAll();

    if (pubs == null) {
        return res.render('home/profile', { error: 'Something went wrong' });
    }

    if (pubs.message) {
        return res.render('home/profile', { error: user.message });
    }

    let shared = pubs.filter(p => p.usersShared.some( u => u.username == req.user.username)).map(x => x.title);

    shared = shared.join(', ');
    titles = titles.join(', ');
    
    const data = {
        address: user.address,
        username: user.username,
        shared,
        titles,
    }
    res.render('home/profile', { ...data });
});

module.exports = router;