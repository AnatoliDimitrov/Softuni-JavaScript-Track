function solve(input) {
    let arr = input;
    let sum = 0;
    let inverseSum = 0;
    let concat = '';
    for (let i = 0; i < arr.length; i++) {
        concat += arr[i].toString();
        let num = Number(arr[i]);
        sum += num;
        inverseSum += (1 / num);
    }
    console.log(sum);
    console.log(inverseSum);
    console.log(concat);
}

solve([1, 2, 3]);