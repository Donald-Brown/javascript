class Person {
    constructor(name, age){
        this.name = 'Mary';
        this.age = age;
    }
}

let person = new Person();

Person.prototype.age = 47;

console.log(Reflect.getPrototypeOf(person));

let proto = {
    age: 30
}
Reflect.setPrototypeOf(person, proto);
console.log(Reflect.getPrototypeOf(person));