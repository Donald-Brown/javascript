let symbol = Symbol('debug');

console.log(symbol.toString());
console.log(typeof symbol);

let anotherSymbol = Symbol('debug');
console.log(symbol == anotherSymbol);

let obj = {
    name: 'Mary',
    [symbol]: 34
}
console.log(obj);
console.log(obj[symbol]);