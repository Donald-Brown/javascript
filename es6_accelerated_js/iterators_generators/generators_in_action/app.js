/*
let obj = {
    [Symbol.iterator]: gen
}

function *gen(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
}

for(const cur of obj){
    console.log(cur);
}
*/

function *gen(val){
    for(let i=0; i<=val; i++){
        yield i;
    }
}

let iterator = gen(7);

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());