function add(num) {
    let sum = num;

    function addition(num) {
        sum += num;
        return addition;
    }

    addition.toString = () => { return sum };
    return addition;
}

console.log(add(1)(6)(-3));