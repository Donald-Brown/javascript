let rabbit = {};
rabbit.speak = function (phrase) {
  console.log(`The rabbit says '${phrase}'`);
};
//rabbit.speak('Hello World!');

function speak(line) {
  console.log(`The ${this.type} rabbit says '${line}'`);
}
let whiteRabbit = { type: "White", speak };
let hungryRabbit = { type: "hungry", speak };

// whiteRabbit.speak('What time is it?');
// hungryRabbit.speak('I need a carrot');
//speak.call(hungryRabbit, 'Burp');
function normalize() {
  console.log(this.coords.map((n) => n / this.length));
}

//normalize.call({coords: [0, 2, 3], length: 5});

let empty = {};
// console.log(empty.toString);
// // → function toString(){…}
// console.log(empty.toString());
// // → [object Object]

let protoRabbit = {
  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  },
};
// let killerRabbit = Object.create(protoRabbit);
// killerRabbit.type = 'Killer';
//killerRabbit.speak('Skreee');

// function makeRabbit(type) {
//   let rabbit = Object.create(protoRabbit);
//   rabbit.type = type;
//   return rabbit;
// }

// function Rabbit(type){
//   this.type = type;
// }
// Rabbit.prototype.speak = function(line){
//   console.log(`The ${this.type} rabbit says '${line}'`);
// };
// let weirdRabbit = new Rabbit('weird');

// console.log(Object.getPrototypeOf(Rabbit) == Function.prototype);
// // true
// console.log(Object.getPrototypeOf(weirdRabbit) == Rabbit.prototype);
// // true

class Rabbit {
  constructor(type) {
    this.type = type;
  }

  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  }
}
let killerRabbit = new Rabbit("Killer");
let blackRabbit = new Rabbit("Black");

let object = new (class {
  getWord() {
    return "Hello";
  }
})();
//console.log(object.getWord());

Rabbit.prototype.teeth = "small";
//console.log(killerRabbit.teeth);
//small
killerRabbit.teeth = "long, sharp, and bloody";
//console.log(killerRabbit.teeth);
//long, sharp, and bloody
//console.log(blackRabbit.teeth);
// small
//console.log(Rabbit.prototype.teeth);
// small

