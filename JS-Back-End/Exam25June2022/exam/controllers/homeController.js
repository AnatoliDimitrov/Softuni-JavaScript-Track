const router = require('express').Router();

const { getAll } = require('../services/cryptoService');

router.get('/', async (req, res) => {
    const all = await getAll();
    return res.render('home', { all });
});

router.get('/search', async (req, res) => {
    const all = await getAll();
    res.render('home/search', { all });
});

router.post('/search', async (req, res) => {
    let all = await getAll();
    let searchWord = req.body.word;
    const searchPaymentMethod = req.body.paymentMethod;

    all = all.filter(h => h.name.toLowerCase().includes(searchWord.toLowerCase()));
    all = all.filter(h => h.paymentMethod == searchPaymentMethod);

    res.render('home/search', {all});
});

module.exports = router;