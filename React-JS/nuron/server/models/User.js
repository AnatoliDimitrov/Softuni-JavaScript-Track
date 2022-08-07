const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: [2, 'First name should be at least 3 characters long!'],
    },
    lastName: {
        type: String,
        required: true,
        minLength: [2, 'Last name should be at least 3 characters long!'],
    },
    email: {
        type: String,
        unique: true,
        required: true,
        match: [/^[A-Za-z0-9_\.]+@[A-Za-z]+\.[A-Za-z]{2,3}$/, 'Email is not valid!'],
    },
    imageUrl: {
        type: String,
    },
    password: {
        type: String,
        required: true,
        minLength: [3, 'Password should be at least 3 characters long!'],
    },
    phoneNumber: {
        type: String,
    },
    bio: {
        type: String,
    },
    nfts: [{
        type: mongoose.Types.ObjectId,
        ref: 'Nft'
    }],
});

const User = mongoose.model('User', userSchema);

module.exports = User;