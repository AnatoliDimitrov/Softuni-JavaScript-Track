function solve() {
    let result = {};
    let output = [];
    for (const argument of arguments) {
        output.push(`${typeof argument}: ${argument}`);
        result[typeof argument] === undefined ? result[typeof argument] = 1 : result[typeof argument] += 1;
    }

    Array.from(Object.keys(result)).sort((a, b) => result[b] - result[a]).forEach(x => output.push(`${x} = ${result[x]}`));
    
    for (const i of output) {
        console.log(i);
    }
}

solve('cat', 42, function () { console.log('Hello world!'); });