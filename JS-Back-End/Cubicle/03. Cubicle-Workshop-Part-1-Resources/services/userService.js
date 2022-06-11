const mongoose = require('mongoose');
const User = require('../models/User');
const bcrypt = require('bcrypt');
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

exports.userLogin = async () => {

}