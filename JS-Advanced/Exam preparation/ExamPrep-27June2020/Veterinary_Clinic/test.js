class VeterinaryClinic {
    constructor(clinicName, capacity) {
        this.clinicName = clinicName;
        this.capacity = capacity;
        this.clients = []; // register of clients and pets for all time;
        this.totalProfit = 0;
        this.currentWorkload = 0;
        this.pets = 0//clients with pets with procedures
    }
 
    newCustomer(ownerName, petName, kind, procedures) {
        if (this.currentWorkload === this.capacity) {
            throw new Error("Sorry, we are not able to accept more patients!");
        }
        kind = kind.toLowerCase();
        let currClient = this.clients.filter(e => e.ownerName === ownerName);
        if (currClient.length === 0) {
            this.clients.push({ownerName, pets: []});
 
        }
        currClient = this.clients.filter(e => e.ownerName === ownerName)[0];
 
        let currPet = currClient.pets.filter(e => e.petName === petName);
        if (currPet.length === 0) {
            currClient.pets.push({petName, kind, procedures})
            this.currentWorkload++;
            return `Welcome ${petName}!`
        } else {
            if (currPet[0].procedures.length === 0) {
                currPet[0].procedures = procedures;
                if (procedures > 0) {
                    
                this.currentWorkload++;
                return `Welcome ${petName}!`
                }
            } else {
                throw new Error(`This pet is already registered under ${ownerName} name! ${petName} is on our lists, waiting for ${currPet[0].procedures.procedures.join(', ')}`)
            }
        }
 
    }
 
 
    onLeaving(ownerName, petName) {
        let currClient = this.clients.filter(e => e.ownerName === ownerName);
        if (currClient.length === 0) {
            throw new Error('Sorry, there is no such client!');
        }
        let currPet = currClient[0].pets.filter(e => e.petName === petName);
        if (currPet.length === 0 || currPet[0].procedures.length === 0) {
            throw  Error(`Sorry, there are no procedures for ${petName}!`);
        }
 
        this.totalProfit = Number(currPet[0].procedures.length) * 500.00;
        this.currentWorkload = this.currentWorkload - 1;
        currPet[0].procedures = [];
        return `Goodbye ${petName}. Stay safe!`
    };
 
    toString() {
        let sortOwners = (a, b) => a.ownerName.localeCompare(b.ownerName);
        let sortPets = (a, b) => a.petName.localeCompare(b.petName);
        let percentage = Math.floor(this.currentWorkload / this.capacity * 100)
        let profit = this.totalProfit.toFixed(2);
        this.clients.sort(sortOwners);
        this.clients.forEach(e => e.pets.sort(sortPets));
        let result = []
        this.clients.forEach(e => {
            result.push(`${e.ownerName} with:`)
            e.pets.forEach(p => {
                let pr = p.procedures.length === 0 ? '' : p.procedures.join(', ');
                result.push(`---${p.petName} - a ${p.kind} that needs: ${pr}`)
            })
        })
        result.unshift(`${this.clinicName} is ${percentage}% busy today!`, `Total profit: ${profit}$`)
        return result.join('\n');
    }
}
