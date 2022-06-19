const mongoose = require('mongoose');
const Publication = require('../models/publication');

exports.createPublication = async (userId, data) => {
    try {
        const pub = {
            title: data.title,
            paintingTechnique: data.paintingTechnique,
            artPicture: data.artPicture,
            certificateOfAuthenticity: data.certificateOfAuthenticity,
            author: userId,
        };
        await Publication.create(pub);
        return pub;
    } catch (error) {
        return { message: error.message }
    }
}

exports.getOnePublication = async (id) => {
    try {
        return Publication.findById(id).populate('author').populate('usersShared').lean();
    } catch (error) {
        return { message: 'Something went wrong' }
    }
}

exports.addShare = async (id, userId) => {
    try {
        let pub = await Publication.findById(id).populate('author');

        pub.usersShared.push(userId);

        await pub.save();
    } catch (error) {
        return { message: 'Something went wrong' }
    }
}

exports.deletePublication = async (id) => {
    try {
        await Publication.findByIdAndDelete(id);
    } catch (error) {
        return { message: 'Something went wrong' }
    }
}

exports.editPublication = async (id, data) => {
    try {
        await Publication.updateOne({_id: id}, {$set: data}, {runValidators: true});
    } catch (error) {
        return { message: 'Something went wrong' }
    }
}