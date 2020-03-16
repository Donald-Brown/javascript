const person = {
    name: 'Mary',
    age: 39,
    details: {
        hobbies: ['cooking', 'chillin'],
        location: 'home'
    },
    greet: function(){
        console.log(`Hello ${this.name} you are ${this.age} years old`);
    }
};

person.name = 'Ann';
console.log(person);
person.greet();