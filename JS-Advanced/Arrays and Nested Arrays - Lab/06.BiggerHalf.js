function solve(inputArr) {
    inputArr.sort((a, b) => a - b);
    let result = inputArr.slice(Math.floor(inputArr.length / 2));
    return result;
}

solve([3, 19, 14, 7, 2, 19, 6]);