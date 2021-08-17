function solve(matrix) {
    let result = matrix.flat();
    return Math.max(...result);
}

solve([[20, 50, 10],
    [8, 33, 145]]
   );