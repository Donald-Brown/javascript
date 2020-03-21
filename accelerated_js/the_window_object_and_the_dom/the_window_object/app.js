const output1 = document.querySelector('.output1');
const output2 = document.querySelector('.output2');
const output3 = document.querySelector('.output3');
const output4 = document.querySelector('.output4');
const output5 = document.querySelector('.output5');
const output6 = document.querySelector('.output6');
const output7 = document.querySelector('.output7');
const output8 = document.querySelector('.output8');
const output9 = document.querySelector('.output9');
const output10 = document.querySelector('.output10');

const FN1 = (function(){
    return `window.innerWidth: ${window.innerWidth}px`;
})();
output1.innerHTML = FN1;

// 
const FN2 = (function(){
    return `innerWidth: ${innerWidth}px`;
})();
output2.innerHTML = FN2;

const FN3 = (function(){
    return `outerWidth: ${outerWidth}px`;
})();
output3.innerHTML = FN3;

const FN4 = (function(){
    return `outerHeight: ${outerHeight}px`;
})();
output4.innerHTML = FN4;

const FN5 = (function(){
    return `innerHeight: ${innerHeight}px`;
})();
output5.innerHTML = FN5;

// Locale storage set item
localStorage.setItem('key1', 'Hi Mary!');
const FN6 = (function(){
    return `localeStorage.getItem(): ${localStorage.getItem('key1')}`;
})();
output6.innerHTML = FN6;

const FN7 = (function(){
    return `winsow.location: ${window.location}`;
})();
output7.innerHTML = FN7;

const FN8 = (function(){
    return `winsow.document: ${window.document}`;
})();
output8.innerHTML = FN8;