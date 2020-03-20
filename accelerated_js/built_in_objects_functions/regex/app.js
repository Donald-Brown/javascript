const pattern = /ab/;

const str = 'abc';

console.log(pattern.exec('abcd'));
console.log(pattern.exec('acd'));

console.log(pattern.test('abcd'));
console.log(pattern.test('acd'));

console.log(str.match(pattern));

