const mongoose = require('mongoose');
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const constants = require('../config/constants');

exports.userRegister = async (username, password) => {
    try {
    password = await bcrypt.hash(password, constants.saltRound);    
    const user = {
        username,
        password,
    };
    User.create(user);
    return user;

    } catch (error) {
        return false;
    }
}

exports.userLogin = async (username, password) => {
    try {
        const user = await User.findOne({username}).lean();
        if (!user) {
            return false;
        }
        const isValidPass = await bcrypt.compare(password, user.password);
        if (isValidPass) {
            let token = new Promise((resolve, reject) => {
                jwt.sign({id: user._id, username: user.username}, constants.secret, {expiresIn: '5d'}, (err, token) => {
                    if (err) {
                        return reject(err);
                    }
                    resolve(token);
                } );
            });
            return token;
        } else {
            return false;
        }
    } catch (error) {
        return false;
    }
}