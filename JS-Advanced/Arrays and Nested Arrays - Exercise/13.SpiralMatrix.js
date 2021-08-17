function solve(rows, cols) {
    
    let counter = 1;
    let limit = rows * cols + 1;
    let matrix = [];

    for (let i = 0; i < rows; i++) {

        matrix[i] = [];
        for (let j = 0; j < cols; j++) {
            matrix[i][j] = 0;
        }
    }

    let right = cols - 1;
    let left = 0;
    let down = 1;
    let up = rows - 1;

    while (true) {
        
        for (let i = left; i <= right; i++) {
            matrix[left][i] = counter++;
        }

        if (counter === limit) {
            break;
        }
        
        for (let i = down; i <= up; i++) {
            matrix[i][right] = counter++;
        }

        if (counter === limit) {
            break;
        }

        right--;

        for (let i = right; i >= left; i--) {
            matrix[up][i] = counter++;
        }

        if (counter === limit) {
            break;
        }

        up--;

        for (let i = up; i >= down; i--) {
            matrix[i][left] = counter++;
        }

        if (counter === limit) {
            break;
        }

        left++;
        down++;
    }

    matrix.forEach(x => console.log(x.join(' ')));
}

solve(3, 3);