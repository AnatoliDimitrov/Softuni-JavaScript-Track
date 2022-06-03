const router = require('express').Router();
const service = require('../services/createService');

router.get('/', (req, res) => {
    res.render('create');
})

router.post('/', (req, res) => {
    let {name, description, imageUrl, difficultyLevel} = req.body;

    service.addCube(name, description, imageUrl, difficultyLevel)
    .then(() => {
        res.redirect('/');
    });
});

module.exports = router;