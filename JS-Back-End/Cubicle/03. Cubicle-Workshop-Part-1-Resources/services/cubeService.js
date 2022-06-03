const fs = require('fs/promises');
const uuid = require('uuid');

exports.addCube = async (cube) => {
    let cubes = await JSON.parse(await fs.readFile('./config/database.json', {encoding: 'utf8'}));

    cubes.push(cube);

    let str = JSON.stringify(cubes, '', 4);

    await fs.writeFile('./config/database.json', str, {encoding: 'utf8'});
};

exports.getCube = async (req) => {
    let cubes = JSON.parse(await fs.readFile('./config/database.json', {encoding: 'utf8'}));
    let cube = cubes.filter(c => c.id === req.params.id)[0];

    return cube;
}