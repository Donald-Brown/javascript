const output1 = document.querySelector(".output1");
const inner = document.querySelector('#inner');

const output2 = document.querySelector(".output2");
const outer = document.querySelector('#outer');

inner.addEventListener('click', innerlistener);
function innerlistener(event) {
    output1.innerHTML = 'Clicked Inner';
};

outer.addEventListener('click', outerlistener, true); // outer will handle first

function outerlistener(event) {
    output2.innerHTML = 'Clicked outer';
};