const router = require('express').Router();
const service = require('../services/userService');
const constants = require('../config/constants');
const auth = require('../middlewares/userMiddleware');

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
        res.redirect('/user/register');
    }
});

router.get('/login', (req, res) => {
    res.render('login');
});

router.post('/login', async (req, res) => {
    const {username, password} = req.body;
    const result = await service.userLogin(username, password);
    if (result) {
        res.cookie(constants.cookieName, result, {httpOnly: true});
        console,console.log(result);
        res.redirect('/');
    } else {
        res.redirect('/user/login');
    }
});

router.get('/logout', (req, res) => {
    res.clearCookie(constants.cookieName);
    res.redirect('/');
});

module.exports = router;