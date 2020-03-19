const spinalCase = str => str.split('')
    .map(c => (/[A-Z]/).test(c) ? `-${c.toLowerCase()}` : c)
    .join('')
    .split(/[_ -]+/)
    .filter(word => word.length)
    .join('-');

console.log(spinalCase('Teletubbies say Eh-oh'));
console.log(spinalCase('thisIsSpinalTap'));
console.log(spinalCase('The_Andy_Griffith_Show'));
console.log(spinalCase('AllThe-small Things'));