class Hex {
    constructor(value) {
        this.value = value;
    }

    valueOf() {
        return this.value;
    }
    plus(num) {
        if (typeof num === 'number') {
            return new Hex(this.value + num);
        } else {
            return new Hex(this.value + num.value);
        }
    }
    minus(num) {
        if (typeof num === 'number') {
            return new Hex(this.value - num);
        } else {
            return new Hex(this.value - num.value);
        }

        return new Hex(this.value);
    }
    toString() {
        let result = '0x';
        result += this.value.toString(16).toUpperCase();
        return result;
    }
    parse(hex) {
        return parseInt(hex, 16);
    }
}


let FF = new Hex(255);
console.log(FF.toString());
FF.valueOf() + 1 == 256;
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString() === '0xF');
console.log(FF.parse('AAA'));
