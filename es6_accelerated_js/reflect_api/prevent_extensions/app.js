class Person {
    constructor(name, age){
        this._name = name;
        this.age = age;
    }

    get name(){
        return this._name;
    }

    set name(value){
        this._name = value;
    }
}

let mom = {
    _name: 'Mom'
}

let person = new Person('Mary', 40);

console.log(Reflect.isExtensible(person));
Reflect.preventExtensions(person);
console.log(Reflect.isExtensible(person));

Reflect.defineProperty(person, 'hobbies', {
    writable: true,
    value: ['fun', 'blazin'],
    configurable: false
});

console.log(person.hobbies);