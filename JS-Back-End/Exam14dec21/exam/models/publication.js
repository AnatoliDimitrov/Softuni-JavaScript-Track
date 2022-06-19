const mongoose = require('mongoose');

const publicationSchema = new mongoose.Schema({
    title: {
        type: String,
        minlength: 6,
        required: true,
    },
    paintingTechnique: {
        type: String,
        maxlength: 15,
        required: true,
    },
    artPicture: {
        type: String,
        required: true,
        validate:{
            validator: /^http?/g,
            //  validator: function(){
            //      return this.artPicture.startsWith('http');
            //  },
            //  message: 'URL is not starting with http or https!'
         }
    },
    certificateOfAuthenticity: {
        type: String,
        enum: ['Yes', 'No'],
        required: true,
    },
    author: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    usersShared: [{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }]
});

const Publication = mongoose.model('Publication', publicationSchema);

module.exports = Publication;