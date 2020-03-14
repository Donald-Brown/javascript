function calc(){
    console.log('Function call');
}

calc();

var calc2 = function(){
    console.log('Function call');
};

calc2();

console.log(typeof calc);
console.log(typeof calc2);

var calc3 = calc2;
calc3();
console.log(typeof calc3);