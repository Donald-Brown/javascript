class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    greet(thirdArg){
        console.log(`${thirdArg}Hello I am ${this.name} I am ${this.age} years old.`);
    }
}

let person = Reflect.construct(Person, ['Mary', 45]);
Reflect.apply(person.greet, person, []);
Reflect.apply(person.greet, {}, []);
Reflect.apply(person.greet, { name: 'Jane' }, ['...']);