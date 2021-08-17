class Company {
    constructor() {
        this.departments = new Map();
    }

    addEmployee(username, salary, position, department) {
        this._validateParamater(username);
        this._validateParamater(salary);
        this._validateParamater(position);
        this._validateParamater(department);
        salary = Number(salary);
        if (isNaN(salary) || salary < 0) {
            throw new Error('Invalid input!');
        }

        if (!this.departments.has(department)) {
            this.departments.set(department, []);
        }

        this.departments.get(department).push({ username, salary, position });
        return `New employee is hired. Name: ${username}. Position: ${position}`;
    }

    bestDepartment() {
        let bestName = '';
        let bestSalary = 0;
        for (const name of this.departments) {
            let department = this.departments.get(name[0]);
            let currentSalary = department.reduce((a, e) => {
                a += e.salary;
                return a;
            }, 0) / department.length;
            if (currentSalary > bestSalary) {
                bestSalary = currentSalary;
                bestName = name[0];
            }
        }

        let sorted = this.departments.get(bestName);
            sorted = sorted.sort((a, b) => this.compare(a, b))
        
        let result = `Best Department is: ${bestName}\nAverage salary: ${bestSalary.toFixed(2)}\n`;
        for (const worker of sorted) {
            result += `${worker.username} ${worker.salary} ${worker.position}\n`;
        }

        return result.trim();
        
    }

    compare(a, b) {
        if (a.salary > b.salary) {
            return -1;
        } else if (b.salary > a.salary) {
            return 1
        } else {
            return a.username.localeCompare(b.username)
        }
    }

    _validateParamater(parameter) {
        if (parameter == '' || parameter == null || parameter == undefined) {
            throw new Error('Invalid input!');
        }
    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
