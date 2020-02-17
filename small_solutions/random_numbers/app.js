function randomRange(min, max){
    return Math.floor(Math.random() * (max - min +1)) + min;
}

console.log(randomRange(3, 4));
console.log(randomRange(1, 100));

const randomRange2 = (min, max) => Math.floor(Math.random() * (max - min +1)) + min;

console.log(randomRange2(3, 4));
console.log(randomRange2(1, 100));