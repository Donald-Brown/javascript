 function deepEqual(a, b){
   // performs simple comparison
   if(a === b){
     return true;
   }

   // determine if either or is null or not an object
   if(a == null || typeof a != 'object' || b == null || typeof b != 'object'){
     return false;
   }

   // destructure keys
   let keysA = Object.keys(a);
   let keysB = Object.keys(b);
   // determine if the objects have the same number of keys
   if(keysA.length != keysB.length){
     return false;
   }

   // Drill down into object with recursion
   for(let key of keysA){
     if(!keysB.includes(key) || !deepEqual(a[key], b[key])){
       return false;
     }
   }

   // If it passes all
   return true;
 }

let obj = {here: {is: "an"}, object: 2};

console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// -> true