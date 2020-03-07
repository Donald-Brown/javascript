// MAPS = key-value pairs - can use any type as a key or a value

const map1 = new Map();

// Set keys
const key1 = 'some string',
      key2 = {},
      key3 = function(){};

// Set map values by key
map1.set(key1, 'Value of key1');
map1.set(key2, 'Value of key2');
map1.set(key3, 'Value of key3');

// get values by key
console.log(map1.get(key1), map1.get(key2), map1.get(key3));

// Count values
console.log(map1.size);

// Iterate MAPS


// Loops using for of to get keys and values
for(let [key, value] of map1){
    console.log(`${key} = ${value}`);
}

for(let key of map1.keys()){
    console.log(key);
}

for(let value of map1.values()){
    console.log(value);
}

map1.forEach(function(value, key){
    console.log(`${key} = ${value}`);
});

const keyValArr = Array.from(map1);
console.log(keyValArr);

const valArr = Array.from(map1.values());
console.log(valArr);

const keyArr = Array.from(map1.keys());
console.log(keyArr);
