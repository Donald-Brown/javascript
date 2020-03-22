let numbers = [1,2,3];

let [,a,b] = numbers;
console.log(a,b);

let [c,...d] = numbers;
console.log(c,d);

let e = 10;
let f = 5;

[e,f] = [f,e];
console.log(e,f);