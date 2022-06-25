const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        minlength: 5,
        required: true,
    },
    email: {
        type: String,
        minlength: 10,
        required: true,
    },
    password: {
        type: String,
        minlength: 4,
        required: true,
    },
});

const User = mongoose.model('User', userSchema);

module.exports = User;