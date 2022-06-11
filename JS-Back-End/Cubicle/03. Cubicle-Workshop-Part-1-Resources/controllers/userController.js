const router = require('express').Router();
const service = require('../services/userService');

router.get('/register', (req, res) => {
    res.render('register');
});

router.post('/register', async (req, res) => {
    const {username, password, repeatPassword} = req.body;
    if (password != repeatPassword) {
        return;
    }
    const result = await service.userRegister(username, password);
    if (result) {
        res.redirect('/user/login');
    } else {
        return;
    }
});

router.get('/login', (req, res) => {
    res.render('login');
});

router.post('/login', (req, res) => {
    const {username, password} = req.body;
    console.log(req.body)
    res.redirect('/');
});

router.get('/logout', (req, res) => {
    res.redirect('/');
});

module.exports = router;