function generator(input){
    let number = input;
    return function(){
        return number * 2;
    };
}

let calc = generator(1000);
console.log(calc);
console.log(calc());