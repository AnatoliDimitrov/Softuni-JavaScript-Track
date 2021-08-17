class Bank {
    constructor(bankName) {
        this._bankName = bankName;
        this.allCustomers = [];
    }

    newCustomer(customer) {
        if (this.allCustomers.some(c => c.firstName === customer.firstName && c.lastName === customer.lastName)) {
            throw new Error(`${customer.firstName} ${customer.lastName} is already our customer!`);
        }

        this.allCustomers.push(customer);
        return customer;
    }

    depositMoney(personalId, amount) {
        if (!this.allCustomers.some(c => c.personalId === personalId)) {
            throw new Error(`We have no customer with this ID!`);
        }
        let customer = this.allCustomers.find(c => c.personalId === personalId);
        if (!customer.hasOwnProperty('totalMoney')) {
            customer['totalMoney'] = 0;
            customer['transactions'] = [];
        }
        customer.totalMoney += amount;

        customer['transactions'].push(`${customer.firstName} ${customer.lastName} made deposit of ${amount}$!`);

        return `${customer.totalMoney}$`;
    }

    withdrawMoney(personalId, amount) {
        if (!this.allCustomers.some(c => c.personalId === personalId)) {
            throw new Error(`We have no customer with this ID!`);
        }
        let customer = this.allCustomers.find(c => c.personalId === personalId);

        if (!customer.hasOwnProperty('totalMoney') || customer.totalMoney < amount) {
            throw new Error(`${customer.firstName} ${customer.lastName} does not have enough money to withdraw that amount!`);
        }

        customer['totalMoney'] -= amount;

        customer['transactions'].push(`${customer.firstName} ${customer.lastName} withdrew ${amount}$!`);

        return `${customer.totalMoney}$`;
    }

    customerInfo(personalId) {
            if (!this.allCustomers.some(c => c.personalId === personalId)) {
                throw new Error(`We have no customer with this ID!`);
            }
        let customer = this.allCustomers.find(c => c.personalId === personalId);
        
        let result = `Bank name: ${this._bankName}`;
            result += `\nCustomer name: ${customer.firstName} ${customer.lastName}`;
            result += `\nCustomer ID: ${personalId}`;
            result += `\nTotal Money: ${customer.totalMoney}$`;
        result += `\nTransactions:`;
        if (!customer.hasOwnProperty('transactions')) {
            return;
        }
        
        for (let i = customer.transactions.length - 1; i >= 0 ; i--) {
            result += `\n${i + 1}. ${customer.transactions[i]}`;
        }

        return result.trim();
    }
}

let bank = new Bank('SoftUni Bank');

console.log(bank.newCustomer({firstName: 'Svetlin', lastName: 'Nakov', personalId: 6233267}));
console.log(bank.newCustomer({firstName: 'Mihaela', lastName: 'Mileva', personalId: 4151596}));

bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
bank.depositMoney(4151596,555);

console.log(bank.withdrawMoney(6233267, 125));
console.log(bank.withdrawMoney(6233267, 12500));

console.log(bank.customerInfo(6233267));

