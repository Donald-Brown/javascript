const output1 = document.querySelector(".output1");
const inner = document.querySelector('#inner');

const output2 = document.querySelector(".output2");
const outer = document.querySelector('#outer');

inner.addEventListener('click', innerlistener);
function innerlistener(event) {
    console.log(event.bubbles);
    event.stopPropagation();
    output1.innerHTML = 'Clicked Inner';
};

outer.addEventListener('click', outerlistener);

function outerlistener(event) {
    console.log(event.bubbles);
    output2.innerHTML = 'Clicked outer';
};