import { SCRIPTS } from "./scripts.js";

function repeatLog(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}
//repeatLog(5);

// Functions calling functions or higher order functions
function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}

let labels = [];
repeat(5, (i) => {
  labels.push(`Unit ${i + 1}`);
  //can be put on one line using braces
});
//console.log(labels);
// → ["Unit 1", "Unit 2", "Unit 3", "Unit 4", "Unit 5"]

// classic example or closure
function greaterThan(n) {
  return (m) => m > n;
}
let greaterThan10 = greaterThan(10);

// Functions that change other functions
// would not work once I made a module to import scripts
// function noisy(f) {
//   return (...args) => {
//     //console.log("calling with", args);
//     let result = f(...args);
//     //console.log("called with", args, ", returned", result);
//     return result;
//   };
// }
// noisy(Math.min)(3, 2, 1);
// → calling with [3, 2, 1]
// → called with [3, 2, 1] , returned 1

// functons to provide flow control
// function unless(test, then) {
//   if (!test) then();
// }

// repeat(3, n => { //repeat is defined above
//   unless(n % 2 == 1, () => {
//     //console.log(n, "is even");
//   });
// });
// → 0 is even
// → 2 is even

// forEach
//["A", "B"].forEach(l => console.log(l));
// → A
// → B

// I imported the SCRIPTS array for the following to make it work
// the following is to show how filter works internally
function filter(array, test) {
  let passed = [];
  for (let element of array) {
    if (test(element)) {
      passed.push(element);
    }
  }
  return passed;
}

//console.log(filter(SCRIPTS, script => script.living));
// → [{name: "Adlam", …}, …]

//this is how filter is used it provides a new array
//console.log(SCRIPTS.filter(s => s.direction == "ttb"));
// → [{name: "Mongolian", …}, …]

// reduce can be tricky take a look at it
function reduce(array, combine, start) {
  let current = start;
  for (let element of array) {
    current = combine(current, element);
  }
  return current;
}

//console.log(reduce([1, 2, 3, 4], (a, b) => a + b, 0));
// → 10

// with the built in method if the array has at least one element we can leave off the start
//console.log([1, 2, 3, 4].reduce((a, b) => a + b));
// → 10

// This function will find the script with the most char codes -- it works look at it
function characterCount(script) {
  return script.ranges.reduce((count, [from, to]) => {
    return count + (to - from);
  }, 0);
}

// console.log(SCRIPTS.reduce((a, b) => {
//   return characterCount(a) < characterCount(b) ? b : a;
// }));
// → {name: "Han", …}
// The following does the same without reduce
let biggest = null;
for (let script of SCRIPTS) {
  if (biggest == null || characterCount(biggest) < characterCount(script)) {
    biggest = script;
  }
}
//console.log(biggest);
// → {name: "Han", …}

// the following finds the average year of living and dead scripts
// looks complex but really is not
function average(array) {
  return array.reduce((a, b) => a + b) / array.length;
}

// console.log(Math.round(average(
//   SCRIPTS.filter(s => s.living).map(s => s.year))));
// → 1165
// console.log(Math.round(average(
//   SCRIPTS.filter(s => !s.living).map(s => s.year))));
// → 204
// Can also be written as
let total = 0,
  count = 0;
for (let script of SCRIPTS) {
  if (script.living) {
    total += script.year;
    count += 1;
  }
}
//console.log(Math.round(total / count));
// → 1165

// the following usees the .some method to determine if the char code is contained a script and return it
function characterScript(code) {
  for (let script of SCRIPTS) {
    if (
      script.ranges.some(([from, to]) => {
        return code >= from && code < to;
      })
    ) {
      return script;
    }
  }
  return null;
}
//console.log(characterScript(121));
// → {name: "Latin", …}

//the following deals with double coded characters such as emoji
// Two emoji characters, horse and shoe
let horseShoe = "🐴👟";
// console.log(horseShoe.length);
// // → 4
// console.log(horseShoe[0]);
// // → (Invalid half-character)
// console.log(horseShoe.charCodeAt(0));
// // → 55357 (Code of the half-character)
// console.log(horseShoe.codePointAt(0));
// // → 128052 (Actual code for horse emoji)

// for/ of loops will give the character whichever it is
let roseDragon = "🌹🐉";
for (let char of roseDragon) {
  //console.log(char);
}
// → 🌹
// → 🐉

// Please help me
function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.findIndex(c => c.name == name);
    if (known == -1) {
      counts.push({name, count: 1});
    } else {
      counts[known].count++;
    }
  }
  return counts;
}
//console.log(countBy([1, 2, 3, 4, 5], n => n > 2));
// → [{name: false, count: 2}, {name: true, count: 3}]

// Somehow the previous causes this to work
function textScripts(text) {
  let scripts = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.name : "none";
  }).filter(({name}) => name != "none");

  let total = scripts.reduce((n, {count}) => n + count, 0);
  if (total == 0) return "No scripts found";

  return scripts.map(({name, count}) => {
    return `${Math.round(count * 100 / total)}% ${name}`;
  }).join(", ");
}

//console.log(textScripts('英国的狗说"woof", 俄罗斯的狗说"тяв"'));
// → 61% Han, 22% Latin, 17% Cyrillic