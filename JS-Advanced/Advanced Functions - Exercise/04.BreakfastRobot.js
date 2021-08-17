function solution() {

    let manager = {
        restock: function (type, count) {
            this.stocks[type] += count;
            return 'Success';
        },
        prepare(type, count) {
            let recipe = Object.assign({}, recipes[type]);
            for (const key in recipe) {
                recipe[key] *= count;
                if (this.stocks[key] < recipe[key]) {
                    return `Error: not enough ${key} in stock`
                }
            }

            for (const key in recipe) {
                this.stocks[key] -= recipe[key];
            }
            return 'Success';
        },
        report() {
            let result = '';
            Array.from(Object.keys(this.stocks)).forEach(x => result += `${x}=${this.stocks[x]} `);
            return result.trim();
        },
        stocks:{
            protein: 0,
            carbohydrate: 0,
            fat: 0,
            flavour: 0,
        }
    };

    let recipes = {
        apple: {
            carbohydrate: 1,
            flavour: 2
        },
        lemonade: {
            carbohydrate: 10,
            flavour: 20
        },
        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3,
        },
        eggs: {
            protein: 5,
            fat: 1,
            flavour: 1,
        },
        turkey: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10,
        },
    };

    
    return function (str) {
        let line = str.split(' ').filter(x => x);
        let command = line[0];
        if (line.length === 1) {
            return manager[command]();
        }
        let type = line[1];
        let count = Number(line[2]);
        return manager[command](type, count);
        
    }
}

let manager = solution (); 
console.log(manager("restock carbohydrate 10")); // Success 
console.log (manager ("restock flavour 10")); // Success 
console.log(manager("prepare apple 1")); // Error: not enough carbohydrate in stock 
console.log(manager("restock fat 10")); // Error: not enough carbohydrate in stock 
console.log(manager("prepare burger 1")); // Error: not enough carbohydrate in stock 
console.log (manager ("report"));