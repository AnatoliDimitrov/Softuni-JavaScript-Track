function solve(arr, start, end) {
    if (start < 0) {
        start = 0;
    }

    if (end > arr.length - 1 ) {
        end = arr.length - 1;
    }

    if (!Array.isArray(arr)) {
        return NaN;
    }

    return Number(arr.slice(start, end + 1).reduce((a, e) => a + e, 0));
}

module.exports = solve;

console.log(solve([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1));