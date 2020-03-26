function *gen(end){
    for(let i=0; i<end; i++){
        try{
            yield i;
        }catch(e){
            console.log(e);
        }
    }
}

let iterator = gen(5);

console.log(iterator.next());
console.log(iterator.throw('error dude!'));
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());