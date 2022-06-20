const router = require('express').Router();
const { getOne } = require('../services/userService');
const { getAll } = require('../services/tripService');
const { isAuthenticated } = require('../middlewares/userMiddleware');
const e = require('express');

router.get('/', async (req, res) => {
    if (req.user) {
        return res.render('home', { email: req.user.email });
    }
    return res.render('home');
});

router.get('/profile', isAuthenticated, async (req, res) => {
    const user = await getOne(req.user.id);

    if (user == null) {
        return res.render('home/profile', { error: 'Non existend user!' });
    }

    if (user.message) {
        return res.render('home/profile', { error: user.message });
    }

    // let titles = user.myPublications.map(p => p.title);
    const trips = await getAll();

    if (trips == null) {
        return res.render('home/profile', { error: 'Something went wrong' });
    }

    if (trips.message) {
        return res.render('home/profile', { error: user.message });
    }

    let tripsList = trips.filter(p => p.creator._id == req.user.id);

    // shared = shared.join(', ');
    // titles = titles.join(', ');
    
    const data = {
        gender: user.gender.toLowerCase(),
        email: user.email,
        tripsCount: tripsList.length,
        trips: tripsList
    }
    res.render('home/profile', { data });
});

module.exports = router;