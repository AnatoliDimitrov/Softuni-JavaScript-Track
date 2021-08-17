function solve(input) {
    let num = Number(input);

    for (let i = 0; i < num; i++) {
        console.log('* '.repeat(num));
    }
}

solve(5);