(function calc(input){
    let number = input;
    console.log(number);
})(10);

//console.log(number); // Reference error not defined

const obj = {};
(function calcA(){
    obj.name = 'Mary';
    console.log(obj);
})(10);

console.log(obj);