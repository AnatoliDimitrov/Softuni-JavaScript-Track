function solve(input) {

    let result = [];

    for (let i = 0; i < input.length; i+=2) {
        const element = input[i];
        result.push(element);
    }
    
    console.log(result.join(' '));
}

solve(['20', '30', '40', '50', '60']);