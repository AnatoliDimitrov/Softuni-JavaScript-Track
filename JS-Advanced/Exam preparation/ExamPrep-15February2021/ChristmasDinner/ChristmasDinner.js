class ChristmasDinner {
    constructor(budget) {
        this.budget = budget;
        this.dishes = [];
        this.products = [];
        this.guests = {};
        this._dishesNames = [];
        this._guestsNames = [];
    }

    get budget() {
        return this._budget;
    }
    set budget(value) {
        if (value < 0) {
            throw new Error("The budget cannot be a negative number");
        } else {
            this._budget = value;
        }
    }

    shopping(product) {
        let name = product[0];
        let price = Number(product[1]);

        if (price > this.budget) {
            throw new Error('Not enough money to buy this product');
        } else {
            this.products.push(name);
            this.budget = this.budget - price;

            return `You have successfully bought ${name}!`;
        }
    }

    recipes(recipe) {
        let recipeName = recipe.recipeName;
        let recipeList = recipe.productsList;

        for (let i = 0; i < recipeList.length; i++) {
            const element = recipeList[i];
            if (!this.products.includes(element)) {
                throw new Error('We do not have this product');
            }
        }

        let recipeObj = {
            recipeName: recipeName,
            productsList: recipeList,
        };

        this.dishes.push(recipeObj);
        this._dishesNames.push(recipeName);

        return `${recipeName} has been successfully cooked!`;
    }

    inviteGuests(name, dish) {
        if (this._guestsNames.includes(name)) {
            throw new Error("This guest has already been invited");
        }
        if (!this._dishesNames.includes(dish)) {
            throw new Error("We do not have this dish");
        }

        this._guestsNames.push(name);
        this.guests[name] = dish;

        return `You have successfully invited ${name}!`
    }

    showAttendance() {
        let result = '';
        for (const key of Object.keys(this.guests)) {
            let index = this._dishesNames.indexOf(this.guests[key]);
            let products = this.dishes[index]['productsList'];
            result += `${key} will eat ${this.guests[key]}, which consists of ${products.join(', ')}\n`
        }

        return result.trim();
    }
}

let dinner = new ChristmasDinner(300);

//console.log(dinner.shopping(['Salt', 1000]));
console.log(dinner.shopping(['Salt', 1]));
console.log(dinner.shopping(['Beans', 3]));
console.log(dinner.shopping(['Cabbage', 4]));
console.log(dinner.shopping(['Rice', 2]));
console.log(dinner.shopping(['Savory', 1]));
console.log(dinner.shopping(['Peppers', 1]));
console.log(dinner.shopping(['Fruits', 40]));
console.log(dinner.shopping(['Honey', 10]));

console.log(dinner.budget);
console.log(dinner.products);

console.log(dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
}));

// console.log(dinner.recipes({
//     recipeName: 'Oshav',
//     productsList: ['Fruits', 'Honey', 'gggg']
// }));

console.log(dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
}));

console.log(dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
}));

console.log(dinner.inviteGuests('Ivan', 'Oshav'));
//dinner.inviteGuests('Ivan', 'Oshav');
console.log(dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice'));
console.log(dinner.inviteGuests('Georgi', 'Peppers filled with beans'));

console.log(dinner.showAttendance());

