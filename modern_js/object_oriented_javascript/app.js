// Object literal
/*
const brad = {
    name: 'Brad',
    age: 30
}

console.log(brad);
console.log(brad.age);
console.log(brad['name']);
*/

///////////////////////////////////////////////////
// Person constructor
/*
function Person(name, age){
    this.name = name,
    this.age = age
}

const brad = new Person("Brad", 40);
const mark = new Person("Mark", 36);

console.log(brad['age']);
console.log(mark.age);
*/
/*
function Person(name, dob){
    this.name = name;

    this.birthday = new Date(dob);
    this.calculateAge = function(){
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);

        return Math.abs(ageDate.getUTCFullYear() - 1970);
    } 

}

const brad = new Person('Brad', '9-10-1981');
console.log(brad.calculateAge());
*/

////////////////////////////////////////////////////////
// built in constructors (not usual)
/*
// Strings
const name1 = 'Jeff';
const name2 = new String('Jeff');

//name2.foo = 'bar';
console.log(typeof name1);
console.log(typeof name2);
console.log(name2 == name1);
console.log(name2 === name1);

// Number
const num1 = 5;
const num2 = new Number(5);

console.log(typeof num1);
console.log(typeof num2);
console.log(num1 === num2);
console.log(num1 == num2);

// Boolean 
const bool1 = true;
const bool2 = new Boolean(true);

// function
const getSum = function(x, y){
    return x + y;
}

const getSum2 = new Function('x','y', 'return x + y');

console.log(getSum(1,1));
console.log(getSum2(2,2));

// Object
const john = { name: 'John' };
const john2 = new Object({ name: 'John' });

console.log(john);
console.log(john2);

// Array
const arr1 = [1,2,3,4];
const arr2 = new Array(1,2,3,4);

console.log(arr1);
console.log(arr2);

// Regular expression
const re1 = /\w+/;
const re2 = new RegExp('\\w+');

console.log(re1);
console.log(re2);
*/

/////////////////////////////////////////////////
// Prototypes explained

//Object.prototype

// Person constructor
// Person.prototype
/*
function Person(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
    
    //this.calculateAge = function(){
    //    const diff = Date.now() - this.birthday.getTime();
   //     const ageDate = new Date(diff);
    //    return Math.abs(ageDate.getUTCFullYear() - 1970);
   // }
    
}

// Calculate age
Person.prototype.calculateAge = function(){
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

// Get full name
Person.prototype.getFullName = function(){
    return `${this.firstName} ${this.lastName}`;
}

// Gets married
Person.prototype.getsMarried = function(newLastName){
    this.lastName = newLastName;
}

const john = new Person('John', 'Doe', 8-13-78);
const mary = new Person('Mary', 'Jane', 'march 20 1970');

console.log(john);
console.log(mary);
mary.getsMarried('Jones');
console.log(mary);
console.log(mary.calculateAge());
console.log(john.getFullName());
*/

/////////////////////////////////////////////
// Prototypal inheritance
/*
// Person constructor 
function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

// Greeting
Person.prototype.greeting = function(){
    return `Hello there ${this.firstName} ${this.lastName}`;
}

const Person1 = new Person('John', 'Doe');

//console.log(Person1.greeting());

// Customer constructor
function Customer(firstName, lastName, phone, membership){
    Person.call(this, firstName, lastName);

    this.phone = phone;
    this.membership = membership;
}

// Inherit person prototype methods
Customer.prototype = Object.create(Person.prototype);

// Make the customer.prototype return customer
Customer.prototype.constructor = Customer;

// Create customer
const customer1 = new Customer('Tom', 'Smith', '555-555-5555', 'Standard');

console.log(customer1);

// Customer greeting
Customer.prototype.greeting = function(){
    return `Hello there ${this.firstName} ${this.lastName} welcome`;
}

console.log(customer1.greeting());
console.log(Person1.greeting());
*/

///////////////////////////////////////////
// Object.create
/*
const personPrototype = {
    greeting: function() {
        return `Hello there ${this.firstName} ${this.lastName}`;
    },
    getsMarried: function(newLastName) {
        this.lastName = newLastName;
    }
}

const mary = Object.create(personPrototype);
mary.firstName = 'Mary';
mary.lastName = 'Jane';
mary.age = 45;

console.log(mary.greeting());
mary.getsMarried('Jones');
console.log(mary);

const ema = Object.create(personPrototype, {
    firstName: { value: 'Ema' },
    lastName: { value: 'Foxxy' },
    age: { value: 35 }
});

console.log(ema);
*/

///////////////////////////////////////////
// ES6 Classes
/*
class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = new Date(dob);
    }

    greeting() {
        return `Hello ${this.firstName} ${this.lastName}`;
    }

    calculateAge(){
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() -1970);
    }

    getsMarried(newLastName){
        this.lastName = newLastName;
    }

    static addNumbers(x, y){
        return x + y;
    }
}

const mary = new Person('Mary', 'Jane', '11-14-1980');
console.log(mary.greeting());
mary.getsMarried('Jones');
console.log(mary);
console.log(mary.calculateAge());
console.log(Person.addNumbers(1, 2));
*/

////////////////////////////////////////////////////
// Sub Classes
/*
class Person {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greeting() {
        return `Hello ${this.firstName} ${this.lastName}`;
    }
}

class Customer extends Person {
    constructor(firstName, lastName, phone, membership){
        super(firstName, lastName);

        this.phone = phone;
        this.membership = membership;
    }

    static getMembershipCost() {
        return 500;
    }
}

const mary = new Customer('Mary', 'Jane', '555-555-5555', 'Standard');

console.log(mary);
console.log(mary.greeting());
console.log(Customer.getMembershipCost());
*/
