class Stringer {

    constructor(str, len) {
        this.innerString  = str;
        this.innerLength = len;
    }

    get innerLength() {
        return this._innerLength;
    }

    set innerLength(value) {
        this._innerLength = value < 0 ? 0 :  value;
    }

    increase(length) {
        this.innerLength += length;
        
    }

    decrease(length) {
        this.innerLength -= length;
    }

    toString() {
        if (this.innerString.length <= this.innerLength) {
            return this.innerString;
        } else {
            let result = this.innerString.substring(0, this.innerLength);
            return result + '...';
        }
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4); 
console.log(test.toString()); // Test
