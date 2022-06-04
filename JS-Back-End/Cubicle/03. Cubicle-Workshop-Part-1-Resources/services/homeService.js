const Cube = require('../models/Cube');

exports.getCubes = async (search = '', from = 1, to = 6) => {
    if (from === '') {
        from = 1;
    }
    if (to === '') {
        to = 6;
    }

    return await Cube.find({
        $and: [
            { difficultyLevel: { $gte: from } },
            { difficultyLevel: { $lte: to } },
            { name: { $regex: new RegExp(search.toLowerCase(), 'i') } }
        ]
    }).lean();
}