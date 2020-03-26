let symbol1 = Symbol.for('age');
let symbol2 = Symbol.for('age');

console.log(symbol1 === symbol2);

let person = {
    name: 'Mary',
    age: 48
};

function makeAge(person){
    let ageSymbol = Symbol.for('age');
    person[ageSymbol] = 67;
}

makeAge(person);

console.log(person[symbol1]);
console.log(person[symbol2]);
console.log(person['age']);