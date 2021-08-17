function solve(instructions) {

    let nums = [];

    for (const instruction of instructions) {
        if (typeof instruction == 'number') {
            nums.push(instruction);
        } else {
            let secondOperand = nums.pop();
            if (nums.length === 0) {
                return "Error: not enough operands!";
            }
            let firstOpereand = nums.pop();

            nums.push(eval(`${firstOpereand} ${instruction} ${secondOperand}`));
        }
    }

    if (nums.length > 1) {
        return "Error: too many operands!";
    }

    return nums[0];
}

console.log(solve([5, 3, 4, '*', '-']));
console.log(solve([3,
    4,
    '+']
));
   
console.log(solve([7,
    33,
    8,
    '-']   
));
   
console.log(solve([15,
    '/']
   ));