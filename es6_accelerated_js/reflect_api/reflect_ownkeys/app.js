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

console.log(Reflect.ownKeys(person));