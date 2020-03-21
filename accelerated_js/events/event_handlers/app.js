const output1 = document.querySelector(".output1");

const FN1 = (function(name) {
    return `Hello ${name},<br> Nothing to see here<br>Open your console!`;
})("Mary");
output1.innerHTML = FN1;

window.onload = function(){
    this.console.log('window loaded');
};

const btn = document.querySelector('button');

btn.onclick = function(){
    console.log('Clicked');
};
// overwritten if used again
btn.onclick = function(){
    console.log('clicked again');
};