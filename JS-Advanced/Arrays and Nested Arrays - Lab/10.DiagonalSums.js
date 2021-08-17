function solve(matrix) {

    let mainResult = 0;
    let secondaryResult = 0;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = i; j < i + 1; j++) {
            const firstElement = Number(matrix[i][j]);
            const secondElement = Number(matrix[i][matrix.length - j - 1]);
            mainResult += firstElement;
            secondaryResult += secondElement;
        }
        
    }

    console.log(mainResult + ' ' + secondaryResult);
}

solve([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]
   );