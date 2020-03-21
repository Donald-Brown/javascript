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

console.log(document);
console.log(document.body);
console.log(document.body.children);

const FN1 = (function() {
    return `document.title: ${document.title}`;
})();
output1.innerHTML = FN1;

const FN2 = (function() {
    return `document.body.children[0].textContent: ${document.body.children[0].textContent}`;
})();
output2.innerHTML = FN2;

//document.body.children[0].textContent = 'something else';

const FN3 = (function() {
    return (document.body.children[0].style.color = "red");
})();
