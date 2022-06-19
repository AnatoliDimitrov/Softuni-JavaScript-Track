const router = require('express').Router();
const { getAll } = require('../services/housingService');

router.get('/', async (req, res) => {
    const all = await getAll();
    res.render('home', {all});
});

router.get('/search', async (req, res) => {
    res.render('home/search');
});

router.post('/search', async (req, res) => {
    let all = await getAll();
    let searchWord = req.body.word;

    if (searchWord == '') {
        searchWord = undefined;
        return res.render('home/search', {all: undefined});
    }

    all = all.filter(h => h.type.toLowerCase().includes(searchWord.toLowerCase()));
    res.render('home/search', {all});
});

module.exports = router;