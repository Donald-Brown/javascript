class Person {

}

Person.prototype[Symbol.toStringTag] = 'Person';

let person = new Person();

console.log(person);

let numbers = [1,2,3];
numbers[Symbol.toPrimitive] = () => numbers.reduce((a,b) => a+b);
console.log(numbers + 1);