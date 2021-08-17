function solve(juices) {
    
    let fruits = new Map();
    let bottles = new Map();

    for (const fruit of juices) {
        let [flavor, quantity] = fruit.split(' => ').filter(x => x);
        quantity = Number(quantity);

        if (!fruits.has(flavor)) {
            fruits.set(flavor, 0);
        }

        let currentQuantity = fruits.get(flavor);
        currentQuantity += quantity;
        fruits.set(flavor, currentQuantity);
        currentQuantity = fruits.get(flavor);
        if (currentQuantity >= 1000) {
            if (!bottles.has(flavor)) {
                bottles.set(flavor, 0);
            }
            let currentBottleQuantity = bottles.get(flavor);
            bottles.set(flavor, currentBottleQuantity + Math.trunc(currentQuantity / 1000))
            fruits.set(flavor, currentQuantity % 1000);
        }
    }

    bottles.forEach((v, k) => console.log(`${k} => ${v}`))
}

solve(['Orange => 2000',
'Peach => 1432',
'Banana => 450',
'Peach => 600',
'Strawberry => 549']
);