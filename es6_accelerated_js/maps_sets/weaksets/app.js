let obj1 = {a:1};
let obj2 = {b:2};
let set = new WeakSet([obj1, obj2]);

console.log(set);

console.log(set.has({b:2}));

