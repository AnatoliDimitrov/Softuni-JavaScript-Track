const mongoose = require('mongoose');
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const constants = require('../constants');
const { promisify } = require('util');

exports.userRegister = async (password, firstName, lastName, email, bio, phoneNumber, imageUrl) => {
    try {
        password = await bcrypt.hash(password, constants.SALT_ROUNDS);
        const user = {
            password,
            firstName,
            lastName,
            email,
            bio,
            phoneNumber,
            imageUrl,
        };
        await User.create(user);
        return await User.findOne({ email }).lean();
    } catch (error) {
        return { message: error.message }
    }
}

exports.userLogin = async (email, password) => {
    try {
        if (!email) {
            throw new Error('email is required'); 
        }
        const user = await User.findOne({ email }).lean();
        if (!user) {
            return { message: 'Invalid Login' };
        }
        
        const isValidPass = await bcrypt.compare(password, user.password);
        if (isValidPass) {
            return user;
        } else {
            return { message: 'Invalid Login' };
        }
    } catch (error) {
        return { message: error.message };
    }
}

exports.getOne = async (userId) => {
    try {
        const user = await User.findById(userId).lean();
        return user;
    } catch (error) {
        return { message: error.message };
    }
}

exports.saveMine = async (userId, modelId) => {
    try {
        const user = await User.findById(userId);
        
        user.myPublications.push(modelId);

        user.save();
    } catch (error) {
        return { message: error.message };
    }
}

exports.deleteMine = async (userId, modelId) => {
    try {
        const user = await User.findById(userId);
        
        const filterd = user.myPublications.filter(x => x._id != modelId);

        user.myPublications = filterd;
        user.save();
    } catch (error) {
        return { message: error.message };
    }
}

exports.createToken = (user) => {
    // const jwtPromisify = promisify(jwt.sign);
    // jwtPromisify({ id: user._id, username: user.username }, constants.SECRET, { expiresIn: '5d' });
    let token = new Promise((resolve, reject) => {
        jwt.sign({ id: user._id, username: user.username }, constants.SECRET, { expiresIn: '5d' }, (err, decodedToken) => {
            if (err) {
                return reject({ message: err });
            }
            resolve(decodedToken);
        });
    });
    return token;
}