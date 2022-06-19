const mongoose = require('mongoose');
const environment = require('./environment');

const connectionString = 'mongodb://localhost:27017/realEstateAgency';

exports.databaseInitialize = () => mongoose.connect(environment.CONNECTION_STRING);