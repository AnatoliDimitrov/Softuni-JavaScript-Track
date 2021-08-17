function solve(products) {

    let catalogue = {};

    for (const product of products) {
        let firstLetter = product[0];

        let [name, price] = product.split(' : ').filter(x => x);

        if (!catalogue.hasOwnProperty(firstLetter)) {
            catalogue[firstLetter] = [];
        }

        catalogue[firstLetter].push({name, price});
    }

    catalogue = Object.entries(catalogue).sort((a, b) => a[0].localeCompare(b[0]));

    let result = '';
    for (const letter of catalogue) {
        result += `${letter[0]}\n`
        let sortedProducts = letter[1].sort((a, b) => a.name.localeCompare(b.name));
        for (const product of sortedProducts) {
            result += `  ${product.name}: ${Number(product.price)}\n`;
        }
    }

    return result;
}

console.log(solve(['Banana : 2', 'Rubics Cube : 5',
'Raspberry P : 4999',
'Rolex : 100000',
'Rollon : 10',
'Rali Car : 2000000',
'Pesho : 0.000001',
'Barrel : 10']

));