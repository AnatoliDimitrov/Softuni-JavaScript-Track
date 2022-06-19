const mongoose = require('mongoose');
const Publication = require('../models/publication');

exports.getAllLeaned = async () => {
    return await Publication.find().lean();
}