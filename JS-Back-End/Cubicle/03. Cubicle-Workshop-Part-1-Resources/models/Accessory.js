const mongoose = require('mongoose');

const accessorySchema = new mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
        maxLength: 300,
    },
    imageUrl: {
        type: String,
        required: true,
    }
});

accessorySchema.path('imageUrl').validate(function() {
    return this.imageUrl.startsWith('http');
});

const Accessory = mongoose.model('Accessory', accessorySchema);

module.exports = Cube;