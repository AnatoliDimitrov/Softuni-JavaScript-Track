const fs = require('fs/promises');
const uuid = require('uuid');

exports.addCube = async (name, description, imageUrl, difficultyLevel) => {
    let cubes = await JSON.parse(await fs.readFile('./config/database.json', {encoding: 'utf8'}));

    cubes.push({
        name,
        description, 
        imageUrl, 
        difficultyLevel,
        id: uuid.v1(),
    });

    let str = JSON.stringify(cubes, '', 4);

    await fs.writeFile('./config/database.json', str, {encoding: 'utf8'});
};