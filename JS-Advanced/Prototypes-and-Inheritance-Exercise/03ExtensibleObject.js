function extensibleObject() {
    let extensible = {};
    extensible.extend = function (template) {
        for (const key of Object.keys(template)) {
            if (typeof template[key] === 'function') {
                let prototypeOfThis = Object.getPrototypeOf(this);
                prototypeOfThis[key] = template[key];
            } else {
                this[key] = template[key];
            }
        }
    }
    return extensible;
}

const myObj = extensibleObject();
console.log(myObj);
const template = {
    extensionMethod: function () { },
    extensionProperty: 'someString'
}
myObj.extend(template);

console.log(myObj);

//function extensibleObject() {
    //         // create prototype obj
    //         let proto = {};
    //         // create extensibleObject with prototype proto
    //         let extObj = Object.create(proto);
    //         //add extend function to extensibleObject
    //         extObj.extend = function (template) {
    //             //iterate keys of template obj
    //             for (const key in template) {
    //                 //if template obj property is function -> add to prototype
    //                 if (typeof template[key] === 'function') {
    //                     let proto = Object.getPrototypeOf(this);
    //                     proto[key] = template[key];
    //                 // if template obj property is not function -> add to extensible obj
    //                 } else {
    //                     this[key] = template[key];
    //                 }
    //             }
    //         }

    //         return extObj; 
    // }