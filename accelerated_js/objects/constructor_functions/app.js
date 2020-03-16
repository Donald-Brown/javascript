function Person(){
    this.name = 'Mary';
    this.greet = function(){
        console.log(`Hello ${this.name}`);
    }
}

Person.prototype.greet2 = function(){
    console.log(`Hi ${this.name}`);
}

const person = new Person();
console.log(person);
person.name = 'Jane';
console.log(person);
const anotherPerson = new Person();
console.log(anotherPerson);
person.greet();
person.greet2();

console.log(person instanceof Person);