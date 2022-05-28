const fs = require('fs');

exports.getCubes = (search = '', from = 1, to = 6) => {
    if(from === ''){
        from = 1;
    }

    if (to === '') {
        to = 6;
    }

    let cubes = JSON.parse(fs.readFileSync('./config/database.json', {encoding: 'utf8'}))
        .filter(c => c.name.toLowerCase().includes(search.toLowerCase()))
        .filter(c => Number(c.difficultyLevel) >= from)
        .filter(c => Number(c.difficultyLevel) <= to);// && c.difficultyLevel >= from && c.difficultyLevel <= to);

    return cubes;
}