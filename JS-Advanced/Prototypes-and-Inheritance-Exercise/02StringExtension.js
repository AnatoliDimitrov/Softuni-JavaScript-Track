(function () {
    String.prototype.ensureStart = function (str) {
        if (this.startsWith(str)) {
            return this.toString();
        }
        return `${str}${this.toString()}`;
    }
    String.prototype.ensureEnd = function (str) {
        if (this.endsWith(str)) {
            return this.toString();
        }
        return `${this.toString()}${str}`;
    }
    String.prototype.isEmpty = function () {
        return this.toString().localeCompare('') == 0;
    };
    String.prototype.truncate = function (n) {
        if (this.length <= n ) {
            return this.toString();
        }

        let words = this.toString().split(' ').filter(x => x);

        if (this.includes(' ')) {
            let parts = this.split(' ')
            while (parts.join(' ').length + 3 > n) {
                parts.pop();
            }
            let whole = `${parts.join(' ')}...`;
            return whole;
        }

        if (n > 3) {
            return `${this.slice(0, n - 3)}...`;
        }

        return '.'.repeat(n);
    }
    String.format = function (str, ...params) {
        console.log(params);
        let regex = /{(\d+)}/g;
        return str.replace(regex, (m, g) => {
            let i = Number(g);
            if (params[i] !== undefined) {
                return params[i];
            }

            return m;
        });
    }
}())

let str = 'my string';
console.log(str = str.ensureStart('my'));
console.log(str = str.ensureStart('hello '));
console.log(str = str.truncate(16));
console.log(str = str.truncate(14));
console.log(str = str.truncate(8));
console.log(str = str.truncate(4));
console.log(str = str.truncate(2));
console.log(str = str.truncate(0));
console.log(str = String.format('The {0} {1} fox',
  'quick', 'brown'));
console.log(str = String.format('jumps {0} {1}',
  'dog'));
