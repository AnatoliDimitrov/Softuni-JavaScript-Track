class Person {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    toString() {
        let className = this.constructor.name;
        return `${className} (name: ${this.name}, email: ${this.email})`;
    }
}

class Teacher extends Person {
    constructor(name, email, subject) {
        super(name, email);
        this.subject = subject;
    }
    toString() {
        let baseStr = super.toString().slice(0, -1);
        return baseStr + `, subject: ${this.subject})`;
    }
}

class Student extends Person {
    constructor(name, email, course) {
        super(name, email);
        this.course = course;
    }
    toString() {
        let baseStr = super.toString().slice(0, -1);
        return baseStr + `, course: ${this.course})`;
    }
}

function extendPrototype(classToExtend) {   
    
    classToExtend.prototype.species = 'Human';
    classToExtend.prototype.toSpeciesString = function() {
        return `I am a ${this.species}. ${this.toString()}`;
    };
    
    return classToExtend;
}

// let a = extendProrotype(Person);
// console.log(a.species);
// console.log(a.toSpeciesString());

let t = new Teacher("Posho", "imail@hit.bg", "Coding");
extendProrotype(t);
console.log(t.species);//.to.equal('Human',"No species property");
console.log(t.toSpeciesString());//.to.equal("I am a Human. Teacher (name: Posho, email: imail@hit.bg, subject: Coding)");


// result(Person);
// let t = new Teacher("Posho", "imail@hit.bg", "Coding");
// t = extendProrotype(Teacher);
// console.log(t.species);
// console.log(t.toSpeciesString());
