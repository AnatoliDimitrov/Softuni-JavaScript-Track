const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        minlength: 4,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        maxlength: 20,
        required: true,
    },
    publications: [{
        type: mongoose.Types.ObjectId,
        ref: 'Publication'
    }]
});

const User = mongoose.model('User', userSchema);

module.exports = User;