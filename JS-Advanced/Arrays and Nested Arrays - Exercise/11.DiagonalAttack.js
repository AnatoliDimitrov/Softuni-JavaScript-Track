function solve(matrix) {

    let numMatrix = [];
    let set = [];

    for (let i = 0; i < matrix.length; i++) {
        numMatrix.push(matrix[i].split(' ').map(x => Number(x)));
    }

    let mainResult = 0;
    let secondaryResult = 0;

    for (let i = 0; i < numMatrix.length; i++) {
            const firstElement = Number(numMatrix[i][i]);
            const secondElement = Number(numMatrix[i][numMatrix.length - i - 1]);
        
        set.push(`${i} ${i}`);
        set.push(`${i} ${numMatrix.length - i - 1}`);

            mainResult += firstElement;
            secondaryResult += secondElement;
    }

    if (mainResult === secondaryResult) {

        for (let i = 0; i < numMatrix.length; i++) {
            for (let j = 0; j < numMatrix.length; j++) {
                const pos = `${i} ${j}`;

                if (set.includes(pos)) {
                    continue;
                }
                
                numMatrix[i][j] = mainResult;
            }
            
        }   
    }

    numMatrix.forEach(x => console.log(x.join(' ')));
}

solve(['1 1 1',
'1 1 1',
'1 1 0']
);