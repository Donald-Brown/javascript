/*
// Create a symbol
const sym1 = Symbol();
const sym2 = Symbol('sym2');

console.log(sym1);
console.log(typeof sym2);
console.log(`Hello ${String(sym1)}`);
*/

/////////////
// Unique object keys
const KEY1 = Symbol();
const KEY2 = Symbol('sym2');

const myObj = {};

myObj[KEY1] = 'Prop1';
myObj[KEY2] = 'Prop2';
myObj.KEY1 = 'Prop3';
myObj.KEY2 = 'Prop4';
myObj.KEY = 'Prop5';

console.log(myObj[KEY2]);
// Symbols not enumerable in for in
for(const i in myObj){
    console.log(`${i}: ${myObj[i]}`);
}

//console.log(myObj);

// Sybols are ignored by JSON.stringify