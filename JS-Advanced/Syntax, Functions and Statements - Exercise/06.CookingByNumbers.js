function solve(number, firstOp, secondOp, thirdOp, fourthOp, fifthOp) {
    number = Number(number);
    let operations = [];
    operations.push(firstOp);
    operations.push(secondOp);
    operations.push(thirdOp);
    operations.push(fourthOp);
    operations.push(fifthOp);

    for (let i = 0; i < operations.length; i++) {
        const element = operations[i];
        
        if (element === 'chop') {
            number = number / 2;
        } else if (element === 'dice') {
            number = Math.sqrt(number);
        } else if (element === 'spice') {
            number += 1;
        } else if (element === 'bake') {
            number *= 3;
        } else if (element === 'fillet') {
            number *= 0.8;
        }

        console.log(number);
    }
}

solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');