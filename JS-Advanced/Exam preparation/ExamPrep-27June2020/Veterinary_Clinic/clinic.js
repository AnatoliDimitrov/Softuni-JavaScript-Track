class VeterinaryClinic {
    constructor(clinicName, capacity) {
        this.clinicName = clinicName;
        this.capacity = capacity;
        this.clients = [];
        this.totalProfit = 0;
        this.currentWorkload = 0;
    }

    newCustomer(ownerName, petName, kind, procedures) {
        if (this.currentWorkload === this.capacity) {
            throw new Error("Sorry, we are not able to accept more patients!");
        }
        if (this.clients.some(c => c.name == ownerName)) {
            let owner = this.clients.find(c => c.name == ownerName);
            if (owner.pets.some(p => p.name === petName)) {
                let pet = owner.pets.find(p => p.name === petName)
                if (pet.procedures.length > 0) {
                    throw new Error(`This pet is already registered under ${ownerName} name! ${petName} is on our lists, waiting for ${pet.procedures.join(', ')}.`);
                } else {
                    pet.procedures = procedures;
                    if (pet.procedures.length > 0) {
                        this.currentWorkload = this.currentWorkload + 1;
                        return `Welcome ${ petName }!`;
                    }
                }
            } else {
                let pet = {
                    name: petName,
                    kind: kind.toLowerCase(),
                    procedures: procedures,
                }
                owner.pets.push(pet);
                pet.procedures = procedures;
    
                if (pet.procedures.length > 0) {
                    this.currentWorkload = this.currentWorkload + 1;
                    return `Welcome ${ petName }!`;
                }
            }
        } else {
            let owner = {
                name: ownerName,
                pets: [],
            }
            let pet = {
                name: petName,
                kind: kind.toLowerCase(),
                procedures: procedures,
            }
            owner.pets.push(pet);
            pet.procedures = procedures;
            this.clients.push(owner);

            if (pet.procedures.length > 0) {
                this.currentWorkload = this.currentWorkload + 1;
                return `Welcome ${ petName }!`;
            }
        }
    }

    onLeaving(ownerName, petName) {
        if (!this.clients.some(c => c.name === ownerName)) {
            throw new Error("Sorry, there is no such client!");
        }

        let owner = this.clients.find(c => c.name === ownerName);

        if (!owner.pets.some(p => p.name === petName)) {
            throw new Error(`Sorry, there are no procedures for ${ petName }!`);
        }

        let pet = owner.pets.find(p => p.name === petName);
        if (pet.procedures.length == 0) {
            throw new Error(`Sorry, there are no procedures for ${ petName }!`);
        }

        let currentBill = pet.procedures.length * 500;
        this.totalProfit += currentBill;
        this.currentWorkload -= 1;
        pet.procedures = [];

        return `Goodbye ${ petName }. Stay safe!`;
    }

    toString() {
        let result = `${this.clinicName} is ${Math.floor((this.currentWorkload / this.capacity) * 100)}% busy today!`;
        result += `\nTotal profit: ${this.totalProfit.toFixed(2)}$`;
        this.clients.sort((a, b) => a.name.localeCompare(b.name));
        
        for (const client of this.clients) {
            result += `\n${client.name} with:`;
            client.pets.sort((a, b) => a.name.localeCompare(b.name));
            for (const pet of client.pets) {
                result += `\n---${ pet.name} - a ${ pet.kind } that needs: ${pet.procedures.join(', ')}`;
            }
        }

        return result;
    }
}

let clinic = new VeterinaryClinic('SoftCare', 10);
console.log(clinic.newCustomer('Jim Jones', 'Tom', 'Cat', ['A154B', '2C32B', '12CDB']));
console.log(clinic.newCustomer('Jim Jones', 'Tom', 'Cat', ['A154B', '2C32B', '12CDB']));
console.log(clinic.newCustomer('Anna Morgan', 'Max', 'Dog', ['SK456', 'DFG45', 'KS456']));
console.log(clinic.newCustomer('Jim Jones', 'Tiny', 'Cat', ['A154B'])); 
console.log(clinic.onLeaving('Jim Jones', 'Tiny'));
// console.log(clinic.onLeaving('Jones', 'Tiny'));
//console.log(clinic.onLeaving('Jim Jones', 'Tny'));
console.log(clinic.toString());
clinic.newCustomer('Jim Jones', 'Sara', 'Dog', ['A154B']); 
console.log(clinic.toString());
