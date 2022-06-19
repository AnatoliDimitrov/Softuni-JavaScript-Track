const mongoose = require('mongoose');
const Publication = require('../models/publication');
const { saveMine, deleteMine } = require('../services/userService');

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

        const createdPub = await Publication.findOne({ ...pub }).lean();

        await saveMine(userId, createdPub._id);

        return pub;
    } catch (error) {
        return { message: error.message }
    }
}

exports.getAll = async () => {
    try {
        return Publication.find().populate('usersShared').lean();
    } catch (error) {
        return { message: error.message }
    }
}

exports.getOnePublication = async (id) => {
    try {
        return Publication.findById(id).populate('author').populate('usersShared').lean();
    } catch (error) {
        return { message: error.message }
    }
}

exports.addShare = async (id, userId) => {
    try {
        let pub = await Publication.findById(id).populate('author');

        pub.usersShared.push(userId);

        await pub.save();
    } catch (error) {
        return { message: error.message }
    }
}

exports.deletePublication = async (userId, id) => {
    try {
        await Publication.findByIdAndDelete(id);
        await deleteMine(userId, id);
    } catch (error) {
        return { message: error.message }
    }
}

exports.editPublication = async (id, data) => {
    try {
        await Publication.updateOne({ _id: id }, { $set: data }, { runValidators: true });
    } catch (error) {
        return { message: error.message }
    }
}