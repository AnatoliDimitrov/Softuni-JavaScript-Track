const res = require('express/lib/response');

const router = require('express').Router();

router.get('/create', (req, res) => {
    res.render('createAccessory');
});

router.post('/create', (req, res) => {

});

router.get('/attach', (req, res) => {
    res.render('attachAccessory');
});

module.exports = router;