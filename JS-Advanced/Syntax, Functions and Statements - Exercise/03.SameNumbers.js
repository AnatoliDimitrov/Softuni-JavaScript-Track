function solve(input) {
    input = input.toString();
    let same = true;
    let sum = Number(input[0]);

    for (let i = 1; i < input.length; i++) {
        if (input[i] !== input[i - 1]) {
            same = false;
        }
        sum += Number(input[i]);
    }

    console.log(same);
    console.log(sum);
}

solve(1234);