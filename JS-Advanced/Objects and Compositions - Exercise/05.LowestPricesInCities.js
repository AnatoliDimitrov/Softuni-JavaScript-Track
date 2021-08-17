function solve(input) {

    let result = {};

    for (const line of input) {
        let [town, product, price] = line
            .split(' | ')
            .filter(x => x);

        price = Number(price);

        if (!result[product]) {
            result[product] = {};
        }
        result[product][town] = price;
    }

    let arr = [];
    for (const prod of Object.keys(result)) {
        let sorted = Object.entries(result[prod]).sort((a, b) => a[1] - b[1]);
       arr.push(prod + ' -> ' + sorted[0][1] + ' (' + sorted[0][0] + ')');
    }

    return arr.join('\n');
}

console.log(solve(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']
));