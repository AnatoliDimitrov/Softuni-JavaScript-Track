const cookieParser = require('cookie-parser');
const constants = require('../config/constants');
const {promisify} = require('util');
const jwt = require('jsonwebtoken');

const jwtVerify = promisify(jwt.verify);

exports.authentication = async (req, res, next) => {
    
    let token = req.cookies[constants.cookieName];

    if (token) {
        try {
            let decodetToken = await jwtVerify(token, constants.secret);

            req.user = decodetToken;

            res.locals.user = decodetToken;
        } catch (error) {
            return res.redirect('/404');
        }
    }

    next();
};

exports.isAuthenticated = (req, res, next) => {
    if (!req.user) {
       return res.redirect('/404');
    } 

    next();
};