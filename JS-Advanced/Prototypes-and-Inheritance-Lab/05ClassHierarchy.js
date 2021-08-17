function solve() {
    class Figure{
        constructor(cm) {
            this.units = 'cm';
            this._cm = cm;
            this._unchanged = cm
        }

        get area() {
            return;
        } 

        changeUnits(units) {
            if (units === 'mm') {
                this._cm = this._unchanged * 10;
                this.units = units;
            } else if (units === 'm') {
                this._cm = this._unchanged / 100;
                this.units = units;
            } else if (units === 'cm') {
                this._cm = this._unchanged;
                this.units = units;
            }
        }

        toString() {
            return `Figures units: ${this.units}`;
        }
    }

    class Circle extends Figure{
        constructor(cm) {
            super(cm);
        }

        get radius() {
            return this._cm;
        }

        get area() {
            return Math.PI * this.radius * this.radius;
        }

        toString() {
            let result = super.toString();
            result += ` Area: ${this.area} - radius: ${this.radius}`;
            return result;
        }
    }

    class Rectangle extends Figure{
        constructor(width, height, units) {
            super(width);
            this._height = height;
            this._unchangedHeight = height;
            this.changeUnits(units);
        }

        get area() {
            return this._height * this._cm;
        }

        changeUnits(units) {
            if (units === 'mm') {
                this._cm = this._unchanged * 10;
                this._height = this._unchangedHeight * 10;
                this.units = units;
            } else if (units === 'm') {
                this._cm = this._unchanged / 100;
                this._height = this._unchangedHeight / 100;
                this.units = units;
            } else if (units === 'cm') {
                this._cm = this._unchanged;
                this._height = this._unchangedHeight;
                this.units = units;
            }
        }

        toString() {
            let result = super.toString();
            result += ` Area: ${this.area} - width: ${this._cm}, height: ${this._height}`;
            return result;
        }
    }

    return {Figure, Circle, Rectangle};
}

let obj = solve();

let c = new obj.Circle(5);
console.log(c.area); // 78.53981633974483
console.log(c.toString()); // Figures units: cm Area: 78.53981633974483 - radius: 5

let r = new obj.Rectangle(3, 4, 'mm');
console.log(r.area); // 1200 
console.log(r.toString()); //Figures units: mm Area: 1200 - width: 30, height: 40

r.changeUnits('cm');
console.log(r.area); // 12
console.log(r.toString()); // Figures units: cm Area: 12 - width: 3, height: 4

c.changeUnits('mm');
console.log(c.area); // 7853.981633974483
console.log(c.toString()) // Figures units: mm Area: 7853.981633974483 - radius: 50
