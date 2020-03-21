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

const btn = document.querySelector('button');

btn.addEventListener('click', listener1);
btn.addEventListener('click', listener2);

setTimeout(function(){
    btn.removeEventListener('click', listener1);
}, 2000)

function listener1(){
    console.log('I\'m listener1');
}

function listener2(){
    console.log('I\'m listener2');
}