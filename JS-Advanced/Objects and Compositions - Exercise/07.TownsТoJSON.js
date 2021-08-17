function solve(input) {

    let result = [];
    input.shift();
    for (let line of input) {
        line = ` ${line} `;
        let [Town, Latitude, Longitude] = line.split(' | ').filter(x => x);

        Latitude = Number(Number(Latitude).toFixed(2));
        Longitude = Number(Number(Longitude).toFixed(2));
        result.push({Town, Latitude, Longitude});
    }

    return JSON.stringify(result);
}

console.log(solve([
    '| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |'
]));