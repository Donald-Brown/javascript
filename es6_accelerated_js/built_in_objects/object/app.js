/*
let obj1 = {
    a: 1
}

let obj2 = {
    b: 2
}

let obj = Object.assign(obj1, obj2);
console.log(obj);
*/

class Obj1 {
    constructor(){
        this.a = 1;  
    }
}

class Obj2 {
    constructor(){
        this.b = 2;
    }
}

let obj1 = new Obj1();
let obj2 = new Obj2();

let obj = Object.assign(obj1, obj2); // the first argument passed is the base which passes instance of and prototype
// May pass empty {}object as first argument to set instance to Object
console.log(obj);

let person = {
    name: 'Mary'
};
let boss = {
    name: 'Jane'
};
console.log(person.__proto__ === Object.prototype);

Object.setPrototypeOf(person, boss);
console.log(person.__proto__ === boss);
console.log(person.name);
