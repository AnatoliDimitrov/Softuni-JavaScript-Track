const { Types } = require('mongoose');
const Accessory = require('../models/Accessory');
const Cube = require('../models/Cube');
const cubeService = require('../services/cubeService');

exports.getAll = async (cube) => {
    return await Accessory.find().lean();
};

exports.createAccessory = async (accessory) => {
    accessory._id = new Types.ObjectId();
    return await Accessory.create(accessory);
};

exports.attachAccessory = async (body) => {
    let cube = await Cube.findById(body.cubeId);
    let accessory = await Accessory.findById(body.accessory);

    cube.accessories.push(accessory);
    accessory.cubes.push(cube);

    await cube.save();
    await accessory.save();
}