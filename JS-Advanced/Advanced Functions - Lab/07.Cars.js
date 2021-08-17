function solve(inputArr) {
    let cars = {};

    for (const line of inputArr) {
        let commands = line.split(' ').filter(x => x);
        let command = commands.shift();
        if (command === 'create') {
            if (commands.length === 1) {
                cars[commands[0]] = {};
            } else {
                cars[commands[0]] = Object.create(cars[commands[2]])
            }
        } else if (command === 'set') {
            cars[commands[0]][commands[1]] = commands[2];
        } else {
            let result = [];
            for (const key in cars[commands[0]]) {
                result.push(`${key}:${(cars[commands[0]][key])}`);
            }
            console.log(result.join(', '));
        }
    }
}

solve(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2'
]);