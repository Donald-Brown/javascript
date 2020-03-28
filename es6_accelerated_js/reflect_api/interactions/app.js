class Person {
    constructor(name, age){
        this.name = 'Mary';
        this.age = age;
    }
}

let person = new Person();

Person.prototype.age = 47;

let proto = {
    age: 30,
    greet(){
        console.log('Hi!');
    }
}
Reflect.setPrototypeOf(person, proto);
Reflect.apply(person.greet, null, []);