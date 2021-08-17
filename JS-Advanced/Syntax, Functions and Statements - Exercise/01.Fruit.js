function solve(type, grams, price) {
    let kgs = Number(grams) / 1000;
    let totalPrice = Number(price) * kgs;

    console.log(`I need $${totalPrice.toFixed(2)} to buy ${kgs.toFixed(2)} kilograms ${type}.`);
}

solve('orange', 2500, 1.80);