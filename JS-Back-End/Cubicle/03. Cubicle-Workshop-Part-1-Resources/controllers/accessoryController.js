const router = require('express').Router();

router.get('/create', (req, res) => {
    res.render('createAccessory');
});

router.post('/create', () => {

});

module.exports = router;