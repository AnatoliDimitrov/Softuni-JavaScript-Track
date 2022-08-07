const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');

const { userRegister, userLogin, createToken, getOne } = require('../services/userService');
const constants = require('../constants');
const User = require('../models/User');
const { isGuest, isAuthenticated } = require('../middlewares/userMiddleware');

router.get('/:userId', async (req, res) => {
    const user = await getOne(req.params.userId);
    res.json(user);
});

router.delete('/:userId', async (req, res) => {
    const { userId } = req.params;
    try {
        await User.findByIdAndDelete(userId);

        res.status(200).json({ userId });
    } catch (err) {
        return res.json({ error: err.message });
    }
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
    const { email, password } = req.body;
    console.log(email);
    console.log(password);

    const user = await userLogin(email, password);
    console.log(user);

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

router.put('/edit/:userId', async (req, res) => {
    const { userId } = req.params;
    let { firstName, lastName, email, bio, phoneNumber } = req.body;
    const data = { firstName, lastName, email, bio, phoneNumber };

    try {
        const user = await User
            .findByIdAndUpdate(userId, data)

        res.status(200).json({ user: user.toObject() });
    } catch (err) {
        return res.json({ error: err.message });
    }
});

router.put('/edit-picture/:userId', async (req, res) => {
    const { userId } = req.params;
    let fileName = '';


    let { imageUrl } = req.body;

    if (req.files) {
        const file = req.files.file;
        fileName = uuidv4();

        console.log(file)
        console.log(req.body)

        imageUrl = `${'http://localhost:3005/public/users/'}${fileName}`;

        file.mv(`${'./static/users'}/${fileName}`);
    }

    const data = { imageUrl};

    try {
        const user = await User
            .findByIdAndUpdate(userId, data);

        res.status(200).json({ user: user.toObject() });
    } catch (err) {
        return res.json({ error: err.message });
    }
});

module.exports = router;