const Cube = require('../models/Cube');

exports.getCubes = async (search = '', from = 1, to = 6) => {
    if(from === ''){
        from = 1;
    }
    if (to === '') {
        to = 6;
    }
        // .filter(c => c.name.toLowerCase().includes(search.toLowerCase()))
        // .filter(c => Number(c.difficultyLevel) >= from)
        // .filter(c => Number(c.difficultyLevel) <= to);// && c.difficultyLevel >= from && c.difficultyLevel <= to);

    return await Cube.find({}).lean();
}