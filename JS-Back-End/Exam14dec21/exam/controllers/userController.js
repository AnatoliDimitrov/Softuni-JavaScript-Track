const router = require('express').Router();
const {userRegister, userLogin, createToken} = require('../services/userService');
const constants = require('../constants');
const { isGuest, isAuthenticated } = require('../middlewares/userMiddleware');

router.get('/register', isGuest, (req, res) => {
    res.render('user/register');
});

router.post('/register', isGuest, async (req, res) => {
    const {username, password, repeatPassword} = req.body;
    if (password != repeatPassword) {
        return res.render('user/register', {error: 'Password mismatch'});
    }
    const user = await userRegister(username, password);

    if (user.message) {
        return res.render('user/register', {error: user.message});
    }
///////////////////If register logins the same time///////////////////
    const token = await createToken(user);

    if (token.message) {
        return res.render('user/register', {error: token.message});
    }

    res.cookie(constants.COOKIE_NAME, token, {httpOnly: true});
    res.redirect('/');
////////////////////////////////////////////////////////////////
/////////////////////If send to login///////////////////////////
    //res.render('user/login');
////////////////////////////////////////////////////////////////
});

router.get('/login', isGuest, (req, res) => {
    res.render('user/login');
});

router.post('/login', isGuest, async (req, res) => {
    const {username, password} = req.body;

    const user = await userLogin(username, password);

    if (user.message) {
        return res.render('user/login', {error: user.message});
    }

    const token = await createToken(user);

    if (token.message) {
        return res.render('user/login', {error: token.message});
    }

    res.cookie(constants.COOKIE_NAME, token, {httpOnly: true});
    res.redirect('/');
});

router.get('/logout', isAuthenticated, (req, res) => {
    res.clearCookie(constants.COOKIE_NAME);
    res.redirect('/');
});

module.exports = router;