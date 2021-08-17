function solve(arr) {

    let result = [];

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];

        if (element === 'add') {
            result.push(i + 1);
        } else {
            result.pop();
        }
    }
    
    if (result.length > 0) {
        result.forEach(x => console.log(x));
    } else {
        console.log('Empty');
    }
}

solve(['remove', 
'remove', 
'remove']
);