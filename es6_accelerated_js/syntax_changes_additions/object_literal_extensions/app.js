let name = 'Mary';
let age  = 44;
let ageField = "age";
const OBJ = {
    name,
    [ageField]: 40,
    greet(){
        console.log(`Hello ${this.name} you are ${this.age} years old`);
    } 
}
console.log(OBJ.name);
OBJ.greet();
console.log(OBJ[ageField]);