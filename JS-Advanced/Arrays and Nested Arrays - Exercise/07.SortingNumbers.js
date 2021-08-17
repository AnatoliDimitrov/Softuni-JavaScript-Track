function solve(arr) {
    arr.sort((a, b) => a - b);

    let result = [];

    for (let i = 0; i < Math.ceil(arr.length / 2); i++) {
        const frontElement = arr[i];
        const backElement = arr[arr.length - i - 1];
        
        if (i === arr.length - i - 1) {
            result.push(arr[i]);
            break;
        }

        result.push(frontElement);
        result.push(backElement);
    }

    return result;
}

solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);