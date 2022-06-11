const Cube = require('../models/Cube');
const { Types } = require('mongoose');

exports.addCube = async (cube) => {
    cube._id = new Types.ObjectId();
    return await Cube.create(cube);
};

exports.createOptions = (category) => {
    return [
      { content: '1 - Very Easy', value: '1' },
      { content: '2 - Easy', value: '2' },
      { content: '3 - Medium (Standard 3x3)', value: '3' },
      { content: '4 - Intermediate', value: '4' },
      { content: '5 - Expert', value: '5' },
      { content: '6 - Hardcore', value: '6' },
    ].map((x, i) => (x.value == category ? { ...x, selected: 'selected' } : x));
  }

exports.getCube = async (req) => {
    let cube = await Cube.findById(req.params.id).lean().populate('accessories');
    return cube;
}

exports.editCube = async (cubeId, data) => {
    const cube = await Cube.findByIdAndUpdate(cubeId, data);
    return cube;
}

exports.deleteCube = async (cube) => {
    try {
        let result = await Cube.findByIdAndDelete(cube._id);
        if (result) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        return false;
    }
}