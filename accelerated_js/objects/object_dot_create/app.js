const person = {
    name: 'Mary',
    age: 39,
};

const anotherPerson = Object.create(person);
anotherPerson.name = 'Ann';

console.log(anotherPerson.age);