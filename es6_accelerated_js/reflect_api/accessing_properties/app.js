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

Reflect.set(person, 'name', 'Jane', mom);

console.log(Reflect.get(person, 'name', mom));
console.log(mom);

console.log(Reflect.get(person, 'name'));

console.log(Reflect.has(person, 'name'));