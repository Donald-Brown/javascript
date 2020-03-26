let emptyArr = Array(5);
console.log(emptyArr);

let arr2 = Array.of(5);
console.log(arr2);

let arr3 = Array.of(5,39,29);
console.log(arr3);

let arr4 = Array.from(arr3, val => val * 2);
console.log(arr4);
console.log(arr3);

arr4.fill(10);
console.log(arr4);

arr4.fill(5, 1, 2);
console.log(arr4);

console.log(arr3.find(val => val >= 20));

let inventory = [
    {name: 'apples', quantity: 2},
    {name: 'bananas', quantity: 0},
    {name: 'cherries', quantity: 5},
    {name: 'cherries', quantity: 15}
];
function findCherries(fruit){
    return fruit.name === 'cherries';
}

console.log(inventory.find(findCherries));

let arr5 = [1,2,3];
console.log(arr5.copyWithin(1, 2));
console.log(arr5);

let arr6 = [1,2,3];
let entries = arr6.entries();
for(const entry of entries){
    console.log(entry);
}