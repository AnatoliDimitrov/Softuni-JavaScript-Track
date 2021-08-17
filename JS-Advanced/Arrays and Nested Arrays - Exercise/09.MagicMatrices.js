function solve(arr) {

    let sum = arr[0]
        .reduce((a, b) => a + b, 0);

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i]
        .reduce((a, b) => a + b, 0);
        
        if (element !== sum) {
            return false;
        }
    }

    for (let col = 0; col < arr.length; col++) {
        let currentSum = 0;
        for (let row = 0; row < arr.length; row++) {
            const element = arr[row][col];
            currentSum += element
        }
        if (currentSum !== sum) {
            return false;
        }
    }
    return true;
}

console.log(solve([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]      
   ));