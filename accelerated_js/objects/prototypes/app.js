const person = {
    name: 'Mary',
    age: 39,
};

Object.prototype.greet = function(){
    console.log(`Hello ${this.name}`);
}

const mary = Object.create(person);
const ann = Object.create(person);
ann.name = 'ann';
console.log(mary.name);
console.log(ann.name);
mary.greet();
ann.greet();

console.log(ann.__proto__ === person);
console.log(ann.__proto__.__proto__ === Object.prototype);
console.log(Object.getPrototypeOf(ann) === person);
