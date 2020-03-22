function isEqualTo(number, compare = 0){
    return number === compare;
}
console.log(isEqualTo(5,6));
console.log(isEqualTo(6,6));
console.log(isEqualTo(5));
console.log(isEqualTo(0));
