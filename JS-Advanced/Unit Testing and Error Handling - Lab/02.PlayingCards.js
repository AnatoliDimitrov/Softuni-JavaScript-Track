function solve(face, suit) {
    if (Number.isInteger(face)) {
        throw new Error();
    }
    let numberFace = Number(face);
    let result = '';
    if ((numberFace >= 2 && numberFace <= 10)) {
        result += face;
    }else if (face === 'J') {
        result += face;
    }else if (face === 'Q') {
        result += face;
    }else if (face === 'K') {
        result += face;
    }else if (face === 'A') {
        result += face;
    } else {
        throw new Error();
    }

    if (suit === 'S') {
        result += '\u2660';
    }else if (suit === 'H') {
        result += '\u2665';
    }else if (suit === 'D') {
        result += '\u2666';
    }else if (suit === 'C') {
        result += '\u2663';
    } else {
        throw new Error();
    }

    return result;
}

module.exports = solve;

//console.log(solve(2, 'D'));