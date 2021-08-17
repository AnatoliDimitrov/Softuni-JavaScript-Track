function getFibonator() {
    let prev = 0;
    let current = 0;

    return function () {
        let next = prev + current;
        if (next === 0) {
            next = 1;
        }
        prev = current;
        current = next;
        return next
    }
}

let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13
