const mongoose = require('mongoose');

const nftSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: [2, 'First name should be at least 3 characters long!'],
    },
    imageUrl: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
        minLength: [10, 'Description should be at least 10 characters long!'],
    },
    price: {
        type: Number,
        required: true,
        min: [1, 'Price should be positive number!'],
    },
    owner: {
        type: String,
        required: true,
    },
    likers: [{
        type: String,
    }],
    buyers: [{
        type: String,
    }],
    
});

const Nft = mongoose.model('Nft', nftSchema);

module.exports = Nft;