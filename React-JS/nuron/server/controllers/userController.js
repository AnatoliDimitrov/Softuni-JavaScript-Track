const router = require('express').Router();
const { userRegister, userLogin, createToken, getOne } = require('../services/userService');
const constants = require('../constants');
const { isGuest, isAuthenticated } = require('../middlewares/userMiddleware');

router.get('/register/:userId', isGuest, async (req, res) => {
    const user = await getOne(req.params.userId);
    res.json(user);
});

router.post('/register', isGuest, async (req, res) => {
    const { password, repeatPassword, firstName, lastName, email } = req.body;
    if (password != repeatPassword && password.length >= 3) {
        return res.json({ error: 'Password mismatch or shorter than 3 characters' });
    }
    const user = await userRegister(password, firstName, lastName, email, '', '', '');

    if (user == null) {
        return res.json({ error: 'Non existend user!' });
    }

    if (user.message) {
        return res.json({ error: user.message });
    }

    const token = await createToken(user);

    if (token.message) {
        return res.json({ error: token.message });
    }

    res.cookie(constants.COOKIE_NAME, token);
    return res.status(200).send(user);
});

router.get('/login/:userId', isGuest, async (req, res) => {
    const user = await getOne(req.params.userId);
    res.json(user);
});

router.post('/login', isGuest, async (req, res) => {
    const { username, password } = req.body;

    const user = await userLogin(username, password);

    if (user == null) {
        return res.json({ error: 'Non existend user!' });
    }

    if (user.message) {
        return res.json({ error: user.message });
    }

    const token = await createToken(user);

    if (token.message) {
        return res.json({ error: token.message });
    }

    res.cookie(constants.COOKIE_NAME, token);
    res.status(200).send(user);
});

router.get('/logout', (req, res) => {
    res.clearCookie(constants.COOKIE_NAME);
    res.json();
});

module.exports = router;