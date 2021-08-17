function solve(input) {
    let result = [];

    for (const element of input) {
        if (element < 0) {
            result.unshift(element);
        } else {
            result.push(element);
        }
    }

    result.forEach(x => console.log(x));
}

solve([7, -2, 8, 9]);