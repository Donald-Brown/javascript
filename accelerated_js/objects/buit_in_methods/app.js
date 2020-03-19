const person = {
    name: "Mary",
    age: 56,
    greet: function(){
        console.log(`Hello ${this.name}`);
    } 
};
console.log(person.name);
console.log('name' in person);

delete person.name;

console.log(person.name);
console.log('name' in person);

for(const e in person){
    console.log(person[e]);
}
