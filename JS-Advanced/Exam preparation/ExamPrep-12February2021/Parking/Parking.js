class Parking{
    constructor(capacity) {
        this.capacity = capacity;
        this.vehicles = [];
    }

    addCar(carModel, carNumber) {
        if (this.vehicles.length < this.capacity) {
            let car = {
                carModel,
                carNumber,
                payed: false,
            };

            this.vehicles.push(car);

            return `The ${carModel}, with a registration number ${carNumber}, parked.`;
        }

        throw new Error("Not enough parking space.");
    }

    removeCar(carNumber) {
        let [car] = this.vehicles.filter(x => x.carNumber === carNumber);

        if (car === undefined) {
            throw new Error("The car, you're looking for, is not found.")
        }

        if (car.payed === false) {
            throw new Error(`${carNumber} needs to pay before leaving the parking lot.`);
        }

        let index = this.vehicles.indexOf(car);
        this.vehicles.splice(index, 1);

        return `${carNumber} left the parking lot.`;
    }

    pay(carNumber) {
        let [car] = this.vehicles.filter(x => x.carNumber === carNumber);

        if (car === undefined) {
            throw new Error(`${carNumber} is not in the parking lot.`)
        }

        if (car.payed === true) {
            throw new Error(`${carNumber}'s driver has already payed his ticket.`);
        }

        car.payed = true;

        return `${carNumber}'s driver successfully payed for his stay.`;
    }

    getStatistics(carNumber) {
        if (carNumber === undefined) {
            let result = `The Parking Lot has ${this.capacity - this.vehicles.length} empty spots left.`;
            let sorted = this.vehicles.sort((a, b) => a.carModel.localeCompare(b.carModel));

            for (const car of sorted) {
                let payed = 'Has payed';
                if (car.payed === false) {
                    payed = 'Not payed';
                }
                result += `\n${car.carModel} == ${car.carNumber} - ${payed}`;
            }

            return result;
        } else {
            let [car] = this.vehicles.filter(x => x.carNumber === carNumber);
            let payed = 'Has payed';
                if (car.payed === false) {
                    payed = 'Not payed';
                }
            return `${car.carModel} == ${car.carNumber} - ${payed}`;
        }
    }
}

const parking = new Parking(12);

console.log(parking.addCar("Volvo t600", "TX3691CA"));
console.log(parking.getStatistics());

console.log(parking.pay("TX3691CA"));
console.log(parking.removeCar("TX3691CA"));
