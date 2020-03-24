import { ConvertableArray } from './convertablearray.js'

let numArr = new ConvertableArray();
numArr.push(1);
numArr.push(2);
numArr.push(3);

console.log(numArr);
console.log(numArr.convert());