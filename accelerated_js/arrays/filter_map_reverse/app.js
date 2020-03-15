let arr = [1,2,3,4];

console.log(arr.filter(function(e){
    return e > 2;
}));
console.log(arr.filter(e => e > 2));

////////////////////////////////
console.log(arr.map(function(e){
    return e * 2;
}));
console.log(arr.map(e => e * 2));
console.log(arr);

//////////////////////////////////
console.log(arr.reverse());
console.log(arr);