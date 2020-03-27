let set = new Set([1,1,1]);

set.add(2);

console.log(set.has(1));
set.delete(1);
console.log(set.has(1));

for(e of set){
    console.log(e);
}
