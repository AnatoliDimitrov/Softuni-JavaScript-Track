function solve(inputArr) {
    let result = [];
    let executer = {
        add(str) {result.push(str)},
        remove(str) { result = result.filter(x => x !== str) },
        print(){console.log(result.join(','))}
    };
    for (const execute of inputArr) {
        let [command, value] = execute.split(' ').filter(x => x);
        executer[command](value);
    }
}

solve(['add pesho', 'add george', 'add peter', 'remove peter','print']);