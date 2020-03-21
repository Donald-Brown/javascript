const output1 = document.querySelector(".output1");
const output2 = document.querySelector(".output2");
const output3 = document.querySelector(".output3");
const output4 = document.querySelector(".output4");
const output5 = document.querySelector(".output5");
const output6 = document.querySelector(".output6");
const output7 = document.querySelector(".output7");
const output8 = document.querySelector(".output8");
const output9 = document.querySelector(".output9");
const output10 = document.querySelector(".output10");

const FN1 = (function(name) {
    return `Hello ${name}!`;
})("Mary");
output1.innerHTML = FN1;

// getElementByTagName();
// getElementByClassName();
// getElementById();
// getElementByName();
// querySelector(); 'tag', '.class', '#id' first element
// querySelectorAll(); 'tag', '.class' array of elements
