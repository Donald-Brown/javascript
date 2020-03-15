let arr = [1,2,3,4];

console.log(arr.reduce(function(a, b){
    console.log(`a: ${a}; b: ${b}`);
    return a + b;
}));
console.log(arr);