const mongoose = require('mongoose');

const cubeSchema = new mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
        maxLength: 300
    },
    imageUrl: {
        type: String,
        required: true,
        validate:{
           // validator: /^http?/g,
            validator: function(){
                return this.imageUrl.startsWith('http');
            },
            message: 'URL is not starting with http or https!'
        }

    },
    difficultyLevel: {
        type: Number,
        required: true,
        min: 1,
        max: 6,
    },
    accessories:[{
        type: mongoose.Types.ObjectId,
        ref: 'Accessory'
    }],
    creator: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'User'
    }
});

const Cube = mongoose.model('Cube', cubeSchema);

module.exports = Cube;