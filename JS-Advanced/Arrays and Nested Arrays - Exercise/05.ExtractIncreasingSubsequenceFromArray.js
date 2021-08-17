function solve(arr) {

    let result = [];
    let currentBiggest = Number.NEGATIVE_INFINITY;

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (currentBiggest <= element) {
            result.push(element);
            currentBiggest = element;
        }
    }

    return result;
}

solve([20, 
    3, 
    2, 
    15,
    6, 
    1]
    
);