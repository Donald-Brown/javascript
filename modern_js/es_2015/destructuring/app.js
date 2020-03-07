// Destructuring assignments

let a, b;
[a, b] = [100, 200];

//Rest pattern
[a, b, ...rest] = [100, 200, 300, 400, 500];

//console.log(a);
//console.log(rest);

({a, b} = {a: 100, b: 200, c: 300, d:400, e: 500});
({a, b, ...rest} = {a: 100, b: 200, c: 300, d:400, e: 500});

//console.log(a, b);
//console.log(a, rest);

// Array destructuring
/*
const people = ['Mary', 'John', 'Amy'];

const [person1, person2, person3] = people;

console.log(person1);
*/

// Parse array returned from function
/*
function getPeople(){
    return ['Mary', 'John', 'Amy'];
}

let person1, person2, person3;
[person1, person2, person3] = getPeople();

console.log(person1, person2, person3);
*/

//Object destructuring

const person = {
    name: 'Mary Jane',
    age: 34,
    city: 'Denver',
    gender: 'female',
    sayHello: function(){
        console.log('Hello');
    }
}

// Old es5
//const name = person.name,
//      age = person.age,
//      city = person.city;

// es6 destructuring
const { name, age, city, sayHello } = person;

console.log(name, age, city);

sayHello();