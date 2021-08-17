class Textbox {
    constructor(selector, regex) {
        this._elements = Array.from(document.querySelectorAll(selector));
        this.attachListener(this._elements)
        this._invalidSymbols = regex;
        this.value = '';
    }

    get value() {
        return this._value;
    }
    set value(val) {
        if (this.isValid(this._invalidSymbols, val)) {
            this._value = val;
            this.elements.forEach(e =>  e.value = this.value )
        }
    }

    get elements() {
        return this._elements;
    }

    isValid(invalidSymbols, text) {
        return !this._invalidSymbols.test(this.elements[0].value);
    }

    attachListener(elements) {
        elements.forEach(e => {
            e.addEventListener('change', (e) => {
                this.value = e.target.value;
            })
        });
    }
}

let textbox = new Textbox(".textbox", /[^a-zA-Z0-9]/);
let inputs = Array.from(document.getElementsByClassName('textbox'));
textbox.value = "Tesst";
inputs.forEach(e => e.addEventListener('click', function () { console.log(textbox.value); }));
