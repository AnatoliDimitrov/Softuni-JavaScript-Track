const mongoose = require('mongoose');
const Housing = require('../models/Housing');
const { saveMine, deleteMine } = require('../services/userService');

exports.create = async (userId, data) => {
    try {
        const housing = {
            name: data.name,
            type: data.type,
            year: data.year,
            city: data.city,
            homeImage: data.homeImage,
            description: data.description,
            pieces: data.pieces,
            owner: userId,
        };
        await Housing.create(housing);

        //const createdHousing = await Housing.findOne({ ...housing }).lean();

        return housing;
    } catch (error) {
        return { message: error.message }
    }
}

exports.getAll = async () => {
    try {
        return Housing.find().lean();
    } catch (error) {
        return { message: error.message }
    }
}

exports.getOne = async (id) => {
    try {
        return Housing.findById(id).populate('owner').populate('rentedHome').lean();
    } catch (error) {
        return { message: error.message }
    }
}

exports.getOneUnleaned = async (id) => {
    try {
        return Housing.findById(id);
    } catch (error) {
        return { message: error.message }
    }
}

exports.addShare = async (id, userId) => {
    try {
        let pub = await Housing.findById(id).populate('author');

        pub.usersShared.push(userId);

        await pub.save();
    } catch (error) {
        return { message: error.message }
    }
}

exports.deleteElement = async (id) => {
    try {
        await Housing.findByIdAndDelete(id);
        //await deleteMine(userId, id);
    } catch (error) {
        return { message: error.message }
    }
}

exports.rentElement = async (id, userId) => {
    try {
        let element = await Housing.findById(id);

        element.pieces = element.pieces - 1;
        element.rentedHome.push(userId);
        
        await element.save();
    } catch (error) {
        return { message: error.message }
    }
}

exports.edit = async (id, data) => {
    try {
        await Housing.updateOne({ _id: id }, { $set: data }, { runValidators: true });
    } catch (error) {
        return { message: error.message }
    }
}