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

Reflect.defineProperty(person, 'hobbies', {
    writable: true,
    value: ['fun', 'blazin'],
    configurable: false
});

console.log(Reflect.ownKeys(person));

console.log(person.hobbies);

person.hobbies = [];
console.log(person.hobbies);

Reflect.deleteProperty(person, 'age');
console.log(person);
