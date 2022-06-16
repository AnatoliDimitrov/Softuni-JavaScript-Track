const mongoose = require('mongoose');
const environment = require('./environment');

const connectionString = 'mongodb://localhost:27017/cubicle';

exports.databaseInitialize = () => mongoose.connect(environment.CONNECTION_STRING);