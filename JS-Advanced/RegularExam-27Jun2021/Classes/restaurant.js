class Restaurant {
    constructor(budgetMoney) {
        this.budgetMoney = budgetMoney;
        this.menu = {};
        this.stockProducts = {};
        this.history = [];
    }

    loadProducts(products) {

        for (const productInfo of products) {
            let [product, quantity, totalPrice] = Array.from(productInfo.split(' ').filter(x => x));
            if (!this.stockProducts.hasOwnProperty(product)) {
                this.stockProducts[product] = 0;
            }

            quantity = Number(quantity);
            totalPrice = Number(totalPrice);

            if (totalPrice <= this.budgetMoney) {
                this.budgetMoney -= totalPrice;
                this.stockProducts[product] += quantity;
                this.history.push(`Successfully loaded ${quantity} ${product}`);
            } else {
                this.history.push(`There was not enough money to load ${quantity} ${product}`);
            }
        }

        return this.history.join('\n').trim();
    }

    addToMenu(meal, neededProducts, price) {
        if (this.menu.hasOwnProperty(meal)) {
            return `The ${meal} is already in the our menu, try something different.`;
        }

        this.menu[meal] = {
            products: {},
            price: price,
        };

        for (const productInfo of neededProducts) { // check for product exist if needed
            let [product, quantity] = productInfo.split(' ').filter(x => x);
            this.menu[meal].products[product] = quantity;
        }

        if (Object.keys(this.menu).length == 1) {
            return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`;
        } else {
            return `Great idea! Now with the ${meal} we have ${Object.keys(this.menu).length} meals in the menu, other ideas?`;
        }
    }

    showTheMenu() {
        if (Object.keys(this.menu).length == 0) {
            return `Our menu is not ready yet, please come later...`;
        }

        let result = '';

        for (const meal of Object.keys(this.menu)) {
            result += `${meal} - $ ${this.menu[meal].price}\n`;
        }

        return result.trim();
    }

    makeTheOrder(meal) {
        if (!this.menu.hasOwnProperty(meal)) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`;
        }
        let mealObj = this.menu[meal];
        let prods = Object.keys(mealObj.products);

        for (const product of prods) {
            if (!this.stockProducts.hasOwnProperty(product)) {
                return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
            }
            let productQuantity = mealObj.products[product];
            if (productQuantity > this.stockProducts[product]) {
                return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
            }
        }

        for (const product of Object.keys(mealObj.products)) {
            let productQuantity = mealObj.products[product];
            this.stockProducts[product] -= productQuantity;
        }

        this.budgetMoney += mealObj.price;
        
        return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${mealObj.price}.`;
    }
}

let kitchen = new Restaurant(1000);
console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));

// let kitchen = new Restaurant(1000);
// console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
// console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));
// console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));

//let kitchen = new Restaurant(1000);
//console.log(kitchen.makeTheOrder('gg'));

// console.log(kitchen.showTheMenu());

// let kitchen = new Restaurant(1000);
// kitchen.loadProducts(['Yogurt 30 3', 'Honey 50 4', 'Strawberries 20 10', 'Banana 5 1']);
// kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99);
// console.log(kitchen.makeTheOrder('frozenYogurt'));



