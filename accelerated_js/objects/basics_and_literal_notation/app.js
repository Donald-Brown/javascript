const person = {
    name: 'Mary',
    age: 39,
    details: {
        hobbies: ['cooking', 'chillin'],
        location: 'home'
    },
    greet: function(){
        console.log(`Hello ${this.name}`);
    }
};

console.log(person.name);
console.log(person['name']);
let field = 'name';
console.log(person[field]);

console.log(person.details.hobbies);
person.greet();

console.log(typeof person);
console.log(typeof person.name);
