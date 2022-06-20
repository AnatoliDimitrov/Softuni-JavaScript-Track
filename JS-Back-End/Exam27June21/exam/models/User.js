const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        minLength: 4,
        required: true,
    },
    gender: {
        type: String,
        enum: ['Male', 'Female'],
        required: true,
    },
    trips: [{
        type: mongoose.Types.ObjectId,
        ref: 'Trip'
    }]
});

const User = mongoose.model('User', userSchema);

module.exports = User;