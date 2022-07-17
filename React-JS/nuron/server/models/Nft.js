const mongoose = require('mongoose');

const nftSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: [2, 'First name should be at least 3 characters long!'],
    },
    imageUrl: {
        type: String,
    },
    description: {
        type: String,
        minLength: [10, 'Description should be at least 10 characters long!'],
    },
    price: {
        type: Number,
        min: [1, 'Price should be positive number!'],
    },
});

const nftModel = mongoose.model('Nft', nftSchema);
module.exports = {
  nftModel,
};