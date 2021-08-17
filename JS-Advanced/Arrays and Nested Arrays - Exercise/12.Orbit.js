function solve(input) {
    let rows = input[0];
    let cols = input[1];
    let starRow = input[2];
    let starCol = input[3];
    
    let space = [];

    for (let i = 0; i < rows; i++) {

        space[i] = [];
        for (let j = 0; j < cols; j++) {
            space[i][j] = 0;
            if (i === starRow && j === starCol) {
                space[i][j] = 1;
            }
        }
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {

            let distanceRow = (Math.abs(i - starRow));
            let distanceCol = (Math.abs(j - starCol));
            if (distanceRow > 0 || distanceCol > 0) {
                if (distanceRow > distanceCol) {
                    space[i][j] = distanceRow + 1;
                } else {
                    space[i][j] = distanceCol + 1;
                }
                
            }
        }
    }

    space.forEach(x => console.log(x.join(' ')));
}
solve([3, 3, 2, 2]);