const mongoose = require('mongoose');
const environment = require('./environment');

const connectionString = 'mongodb://localhost:27017/nuron';

exports.databaseInitialize = () => mongoose.connect(environment.CONNECTION_STRING);