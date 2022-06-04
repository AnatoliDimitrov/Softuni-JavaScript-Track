const Cube = require('../models/Cube');
const { Types } = require('mongoose');

exports.addCube = async (cube) => {
    cube._id = new Types.ObjectId();
    return await Cube.create(cube);
};

exports.getCube = async (req) => {
    let cube = await Cube.findById(req.params.id).lean();
    return cube;
}