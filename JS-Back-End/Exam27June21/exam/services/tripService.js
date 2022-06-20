const mongoose = require('mongoose');
const Trip = require('../models/Trip');
const { saveMine, deleteMine } = require('../services/userService');

exports.create = async (userId, data) => {
    try {
        const trip = {
            start: data.start,
            end: data.end,
            date: data.date,
            time: data.time,
            carImage: data.carImage,
            carBrand: data.carBrand,
            seats: data.seats,
            price: data.price,
            description: data.description,
            creator: userId,
        };
        await Trip.create(trip);

        //const createdTrip = await Trip.findOne({ ...trip }).lean();

        return trip;
    } catch (error) {
        return { message: error.message }
    }
}

exports.getAll = async () => {
    try {
        return Trip.find().lean();
    } catch (error) {
        return { message: error.message }
    }
}

exports.getOne = async (id) => {
    try {
        return Trip.findById(id).populate('creator').populate('buddies').lean();
    } catch (error) {
        return { message: error.message }
    }
}

exports.getOneUnleaned = async (id) => {
    try {
        return Trip.findById(id);
    } catch (error) {
        return { message: error.message }
    }
}

exports.addShare = async (id, userId) => {
    try {
        let pub = await Trip.findById(id).populate('author');

        pub.usersShared.push(userId);

        await pub.save();
    } catch (error) {
        return { message: error.message }
    }
}

exports.deleteElement = async (id) => {
    try {
        await Trip.findByIdAndDelete(id);
        //await deleteMine(userId, id);
    } catch (error) {
        return { message: error.message }
    }
}

exports.joinElement = async (id, userId) => {
    try {
        let element = await Trip.findById(id);

        element.seats = element.seats - 1;
        element.buddies.push(userId);
        
        await element.save();
    } catch (error) {
        return { message: error.message }
    }
}

exports.edit = async (id, data) => {
    try {
        await Trip.updateOne({ _id: id }, { $set: data }, { runValidators: true });
    } catch (error) {
        return { message: error.message }
    }
}