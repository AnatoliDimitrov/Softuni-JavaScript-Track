const mongoose = require('mongoose');
const Publication = require('../models/publication');

exports.getAllLeaned = async () => {
    try {
        return await Publication.find().lean();
    } catch (error) {
        return { message: error.message }
    }
}