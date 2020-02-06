// console log
/*
console.log("Hello World");
console.log(123);
console.log(true);
var greeting = "Hi";
console.log(greeting);
console.log([1, 2, 3, 4]);
console.log({ a: 1, b: 2 });

console.table({ a: 1, b: 2 });
console.error("Some error");
console.clear();
console.warn("Some Warning");

console.time("Hello");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.timeEnd("Hello");
*/

//////////////////////////////////////////////////////////
/*
// Primative
// String
const name = "John Doe";
// Number
const age = 5;
// Boolean
const hasKids = true;
// null
const no = null;
// undefined
let car;
// Symbol
const sym = Symbol();

// Reference
// Array
const hobbies = ["movies", "music"];
// Object litteral
const address = {
  city: "Boston",
  state: "MA"
};
// Date
const today = new Date();

console.log(typeof name);
console.log(typeof age);
console.log(typeof hasKids);
console.log(typeof no);
console.log(typeof car);
console.log(typeof sym);
console.log(typeof hobbies);
console.log(typeof address);
console.log(typeof today);
console.log(today);
*/

/////////////////////////////////////////////////////////////

// Type Conversion
/*
let val;

// number to string
val = String(511);
val = String(5 + 1);
// boolean to string
val = String(true);
// Date to string
val = String(new Date());
// Array to string
val = String([1, 2, 3, 4]);
// toString
val = (5).toString();
val = true.toString();
// string to number
val = Number("5");
val = Number(true);
val = Number(false);
val = Number(null);
val = Number("Hello");

val = parseInt("100.30");
val = parseFloat("100.30");

// output
console.log(val);
console.log(typeof val);
console.log(val.length);
console.log(val.toFixed(2));

// coersion
const val1 = "5";
const val2 = 6;
const sum = val1 + val2;

console.log(sum);
console.log(typeof sum);
*/

//////////////////////////////////////////////

// numbers and the math object
/*
const num1 = 100;
const num2 = 50;
let val;

// Simple math with numbers
val = num1 + num2;
val = num1 * num2;
val = num1 - num2;
val = num1 / num2;
val = num1 % num2;
val = num1 > num2;
val = num1 < num2;

// Math Object
val = Math.PI;
val = Math.E;
val = Math.round(5.5);
val = Math.floor(5.5);
val = Math.ceil(5.5);
val = Math.sqrt(5.5);
val = Math.abs(5.5);
val = Math.pow(5.5, 2);
val = Math.min(5.5, 6, 2, 7, 9);
val = Math.max(5.5, 6, 2, 7, 9);
val = Math.random();

val = Math.floor(Math.random() * 20 + 1);

console.log(val);
*/

///////////////////////////////////////////////////////////

// String methods and concatination
/*
const firstName = "William";
const lastName = "Johnson";
const age = 52;

let val;

val = firstName + lastName;

// concatination
val = firstName + " " + lastName;
val = `${firstName} ${lastName}`;

// Append
val = "Sam ";
val += "Smith";

str = "Hello my name is " + firstName + " and I am " + age;

// length
val = firstName.length;

// concat
val = firstName.concat(" ", lastName);

// Change Case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[2];

// indexOf
val = firstName.indexOf("l");
val = firstName.lastIndexOf("l");

// charAt
val = firstName.charAt(5);

// get last char
val = firstName.charAt(firstName.length - 1);

// substring
val = firstName.substring(0, 4);

// slice
val = firstName.slice(0, 4);
val = firstName.slice(-3);

// split
val = str.split(" ");

// replace
val = str.replace("William", "Pete");

// includes
val = str.includes("foo");

console.log(val);
*/

/////////////////////////////////////////////////////////////////

// Template Literals
/*
const name = "John";
const age = 40;
const job = "Developer";
const city = "Portland";
let html;

function hello() {
  return "hello";
}

html = `
  <ul>
    <li>Name: ${name}</li>
    <li>Age: ${age}</li>
    <li>Job: ${job}</li>
    <li>City: ${city}</li>
    <li>City: ${2 + 2}</li>
    <li>City: ${hello()}</li>
    <li>City: ${age > 30 ? "over 30" : "Under 30"}</li>
  </ul>
`;

document.body.innerHTML = html;
*/
////////////////////////////////////////////////////////
/*
// Arrays and array methods
// create some arrays

const numbers = [32, 54, 65, 23, 65, 430, 7654, 300];
const numbers2 = new Array(22, 445, 7675, 2, 54);
const fruit = ["apple", "orange", "pear", "bannana"];
const mixed = [22, "hello", true, null, undefined, { a: 1, b: 1 }, new Date()];

let val;

// get array length
val = numbers.length;
// check if is array
val = Array.isArray(numbers);
// get single val
val = numbers[3];
// insert into an array
numbers[2] = 100;
// find the index of a value
val = numbers.indexOf(65);

// mutating arrays
// add to end
numbers.push(250);
// add to front
numbers.unshift(129);
// remove from end
numbers.pop();
// remove from front
numbers.shift();
// splice values
numbers.splice(1, 2);
// reverse array
numbers.reverse();

// concate an array
val = numbers.concat(numbers2);

// sorting arrays
val = fruit.sort();
val = numbers.sort();

// use the compare function
val = numbers.sort(function(x, y) {
  return x - y;
});
val = numbers.sort((x, y) => x - y);

// reverse sort
val = numbers.sort(function(x, y) {
  return y - x;
});
val = numbers.sort((x, y) => y - x);

// find

function under50(num) {
  return num < 50;
}

under50 = num => num < 50;
val = numbers.find(under50);

console.log(numbers);

console.log(val);
*/
/////////////////////////////////////////////////////////////////

// Object Literals
/*
const person = {
  firstName: "Steve",
  lastName: "Smith",
  age: 50,
  email: "steve@aol.com",
  hobbies: ["music", "sports"],
  address: {
    city: "Miami",
    state: "FL"
  },
  getBirthYear: function() {
    return 2020 - this.age;
  }
};

let val;
val = person;
// get specific value
val = person.firstName;
val = person["lastName"];
val = person.age;
val = person.hobbies;
val = person.hobbies[1];
val = person.address.state;
val = person.address["city"];
val = person.getBirthYear();

console.log(val);

const people = [
  { name: "John", age: 50 },
  { name: "Mike", age: 36 }
];

for (let i = 0; i < people.length; i++) {
  console.log(people[i].name);
}
*/

///////////////////////////////////////////////////

// Dates and Times
/*
let val;

const today = new Date();
let birthday = new Date("9-10-1981 11:26:00");
birthday = new Date("September 10 1981");
birthday = new Date("9/10/1990");

val = today.getMonth();
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();

birthday.setMonth(2);
birthday.setDate(8);
birthday.setFullYear(1960);
birthday.setHours(3);
birthday.setMinutes(45);
birthday.setSeconds(35);

console.log(birthday);
*/

////////////////////////////////////////////////////

// If statements and comparison oporators
/*
const id = 100;

// Equal To
if (id === 100) {
  console.log("Correct");
} else {
  console.log("Incorrect");
}

// Not Equal
if (id !== 100) {
  console.log("Correct");
} else {
  console.log("Incorrect");
}

if (typeof id !== "undefined") {
  console.log(`The ID is ${id}`);
} else {
  console.log(`No ID`);
}
*/
/*
const id = 300;

// Greater or less than
if (id > 200) {
  console.log("Correct");
} else {
  console.log("Incorrect");
}

if (id < 200) {
  console.log("Correct");
} else {
  console.log("Incorrect");
}

if (id <= 200) {
  console.log("Correct");
} else {
  console.log("Incorrect");
}
*/

// If Else
/*
const color = "yellow";

if (color === "red") {
  console.log("Color is red");
} else if (color === "blue") {
  console.log("Color is blue");
} else {
  console.log("Color is not red or blue");
}

const name = "Steve";
const age = 20;

// && and
if (age > 0 && age <= 12) {
  console.log(`${name} is a child`);
} else if (age >= 13 && age <= 19) {
  console.log(`${name} is a teenager`);
} else {
  console.log(`${name} is an adult`);
}

// || or
if (age < 16 || age > 65) {
  console.log(`${name} can not run in race`);
} else {
  console.log(`${name} is registered for the race`);
}

// ternary operator
console.log(age === 30 ? "Correct" : "Incorrect");
*/

///////////////////////////////////////////////////////

// Switches
/*
const color = "yellow";

switch (color) {
  case "red":
    console.log("Color is red");
    break;
  case "blue":
    console.log("Color is blue");
    break;
  default:
    console.log("Color is not red or blue");
    break;
}

switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wendsday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;
}
console.log(`Today is ${day}`);
*/

//////////////////////////////////////////////////////////

// Function declarations and expressions
