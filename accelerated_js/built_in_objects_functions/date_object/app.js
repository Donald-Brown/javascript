const TODAY = new Date();
console.log(TODAY);
console.log(TODAY.toString());

const BDAY = new Date(1976, 4, 15);
console.log(BDAY.toString());

const BDAY2 = new Date('1976/05/15');
console.log(BDAY2.toString());

console.log(Date.parse('1976/05/15'));

console.log(new Date().getDay());

const TODAY2 = new Date().getDay();
console.log(TODAY2);