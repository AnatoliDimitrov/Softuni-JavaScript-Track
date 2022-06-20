const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
    start: {
        type: String,
        minLength: 4,
        required: true,
    },
    end: {
        type: String,
        minLength: 4,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    carImage: {
        type: String,
        required: true,
        validate:{
            validator: /(http|https?):\/\/[^ "]+$/
         }
    },
    carBrand: {
        type: String,
        minLength: 4,
        required: true,
    },
    seats: {
        type: Number,
        min: 0,
        max: 4,
        required: true,
    },
    price: {
        type: Number,
        min: 1,
        max: 50,
        required: true,
    },
    description: {
        type: String,
        minLength: 10,
        required: true,
    },
    creator: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    buddies: [{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }]
});

// tripSchema.path('carImage').validate(function() {
//     return this.carImage.startsWith('http://') || this.carImage.startsWith('https://');
// });

const Trip = mongoose.model('Trip', tripSchema);

module.exports = Trip;