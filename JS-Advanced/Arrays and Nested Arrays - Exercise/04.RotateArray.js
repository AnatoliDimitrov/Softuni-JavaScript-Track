function solve(arr, steps) {
    for (let i = 0; i < steps; i++) {
        const element = arr.pop();
        arr.unshift(element);
    }

    console.log(arr.join(' '));
}

solve(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15

);