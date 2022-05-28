const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('create');
})

router.post('/', (req, res) => {
    let {name, description, imageUrl, difficultyLevel} = req.body;
    res.redirect('/');
});

module.exports = router;