let regex;

regex = /hello/;

console.log(regex);
console.log(regex.source);

// exec() - Return return result in an array or null

const result = regex.exec("world hello");

console.log(result);
console.log(result[0]);
console.log(result.index);
console.log(result.input);

// test() - returns true or false
const result2 = regex.test("hello");

console.log(result2);

// match() - Return result array or null
const str = "hello there";
const result3 = str.match(regex);
console.log(result3);

// search() - returns index of the first match, if not found -1
const result4 = str.search(regex);
console.log(result4);

// replace() - return a new string with some or all matches of a patern
const newStr = str.replace(regex, 'Hi');
console.log(newStr);