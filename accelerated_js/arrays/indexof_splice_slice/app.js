let arr = ['new',1,2,3];
arr[arr.indexOf('new')] = 'old';
console.log(arr);

arr2 = arr.splice(0, 2); // starting and number of elements
console.log(arr2);
console.log(arr);

let arr3 = ['new',1,2,3];
arr4 = arr3.slice(1, 3); // starting and ending
console.log(arr4);
console.log(arr3);