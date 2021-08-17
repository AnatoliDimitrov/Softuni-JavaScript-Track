function solve(n, k) {

    let arr =  new Array(n);
    arr.fill(1);

    for (let i = 2; i < n; i++) {

        let number = 0;
        for (let j = i - 1; j >= i - k && j >= 0; j--) {
            number += arr[j];
        }
        
        arr[i] = number;
    }

    return arr;
}

console.log(solve(9, 5));