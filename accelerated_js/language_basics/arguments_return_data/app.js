function calc(a, b){
    return a + b;
};

var returned = calc(2, 3);
console.log(returned);

var returned = calc;
console.log(returned(4,6));