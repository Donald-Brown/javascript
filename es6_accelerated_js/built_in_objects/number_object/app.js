let num = NaN;
let num2 = 'NaN';
let num3 = 1000;
let num4 = Infinity;

console.log(isNaN(num));
console.log(Number.isNaN(num));

console.log(isNaN(num2));
console.log(Number.isNaN(num2));

console.log(Number.isFinite(num));
console.log(Number.isFinite(num3));
console.log(Number.isFinite(num4));

console.log(Number.isInteger(num));
console.log(Number.isInteger(num3));
console.log(Number.isInteger(num4));