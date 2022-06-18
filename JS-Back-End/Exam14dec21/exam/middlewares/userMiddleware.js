const cookieParser = require('cookie-parser');
const constants = require('../constants');
const { promisify } = require('util');
const jwt = require('jsonwebtoken');

const jwtVerify = promisify(jwt.verify);

exports.authentication = async (req, res, next) => {

    const token = req.cookies[constants.COOKIE_NAME];

    if (token) {
            //let decodedToken = await jwtVerify(token, constants.SECRET);

            jwt.verify(token, constants.SECRET,((err, decodedToken) => {
                if (err) {
                    res.clearCookie(constants.COOKIE_NAME);
                    return next(err);
                }

                req.user = decodedToken;
                res.locals.user = decodedToken;

                next();
            }))
    } else {
        next();
    }
};
///////////////////////////////////////Becareful where redirects////////////////////////////////////
exports.isAuthenticated = (req, res, next) => {
    if (!req.user) {
        return res.render('user/login');
    }

    next();
};
///////////////////////////////////////Becareful where redirects////////////////////////////////////
exports.isGuest = (req, res, next) => {
    if (req.user) {
        return res.render('user/login');
    }

    next();
};