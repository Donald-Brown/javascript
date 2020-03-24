import {Person} from './person.js';

let person = new Person('Mary',43);
console.log(person);
person.greet();

console.log(person.__proto__ === person.prototype);
console.log(person.__proto__ === Person.prototype);