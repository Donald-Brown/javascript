const output1 = document.querySelector(".output1");
const inner = document.querySelector('#inner');

const output2 = document.querySelector(".output2");
const outer = document.querySelector('#outer');

inner.addEventListener('click', innerlistener);
function innerlistener(event) {
    console.log(event.target);
    event.target.style.backgroundColor = 'orangered';
    event.stopPropagation();
    output1.innerHTML = `x position: ${event.clientX}<br> y position: ${event.clientY}`;
};

outer.addEventListener('click', outerlistener);

function outerlistener(event) {
    output2.innerHTML = 'Clicked outer';
};