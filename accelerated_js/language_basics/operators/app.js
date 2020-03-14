// Addition
let a = 5;
let b = 2;

a += b;
console.log(a);
a ++;
console.log(a);

let c = 'join ';
let d = 2;

console.log(c+d);

let e = 'join ';
let f = [1,2];

console.log(e+f);

let g = 12;
let h = '1';

console.log(g+h);

let i = true;
let j = true;

console.log(i+j);

// Subtraction
let k = 5;
let l = 2;

k -= l;
console.log(k);
k --;
console.log(k);

let m = 5;
let n = '2';
console.log(m-n);

// Multiplication
let o = 5;
let p = 2;
console.log(o*p);

let q = 1.3;
let r = 2.2;
console.log(q*r);

let s = 1.3;
let t = 2.2;
console.log((s*t).toFixed(2));

let u = 2.2;
let v = '2';
console.log(u*v);

// Dividion and modulus
let x = 12;
let y = 2;

console.log(x/y);

let z = 12;
let ab = '2';

console.log(z/ab);
let ac = 1.3;
let ad = 2.2;
console.log((ac/ad).toFixed(3));

let ae = 12;
let af = 5;

console.log(ae%af);

// Comparison
console.log(1 === 1);
console.log(1 === '1');
console.log(1 == '1');

console.log(1 !== 2);
console.log(1 !== '1');

console.log(1 > 2);
console.log(1 > 1);
console.log(1 >= 1);

// Important rules
console.log(NaN == NaN);
console.log(NaN != NaN);

console.log(0 == null);
console.log(undefined == null);
console.log(undefined == 0);

// Boolean
let newVar = true;
console.log(!newVar);

// and -- or
if(1 === 1 && 2 === 3 || 0 === 0){
    console.log(true);
}else{
    console.log(false);
}

// Ternary Operator
console.log(2 === 3 ? 'equal' : 'not equal');
(1===1 && 2===3 || 0===0) ? console.log(true) : console.log(false);

// Precedence
console.log(5 + 6 * 2);
console.log((5 + 6) * 2);
// Gppgle MDN Opereator Precedence
