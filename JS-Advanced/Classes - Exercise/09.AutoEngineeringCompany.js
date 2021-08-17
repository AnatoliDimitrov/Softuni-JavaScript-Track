function solve(carsInput) {

    let cars = new Map();

    for (const car of carsInput) {
        let [brand, model, quantity] = car.split(' | ').filter(x => x);
        quantity = Number(quantity);

        if (!cars.has(brand)) {
            cars.set(brand, new Map());
        }

        let currentInnerMap = cars.get(brand);
        if (!currentInnerMap.has(model)) {
            currentInnerMap.set(model, 0);
        }

        let currentQuantity = currentInnerMap.get(model);
        currentInnerMap.set(model, currentQuantity + quantity);
    }

    let result = '';
    for (const car of cars) {
        result += car[0] + '\n';
        for (const model of car[1]) {
            result += `###${model[0]} -> ${model[1]}\n`;
        }
    }

    console.log(result.trim());
}

solve(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10']
);