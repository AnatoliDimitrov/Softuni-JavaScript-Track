function solve(inputArr, order) {
    return order === 'asc' ? inputArr.sort((a, b) => a - b) : inputArr.sort((a, b) => b - a);
}

console.log(solve([14, 7, 17, 6, 8], 'desc'));