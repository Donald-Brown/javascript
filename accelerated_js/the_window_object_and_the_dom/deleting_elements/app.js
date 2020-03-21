const a = document.querySelectorAll('a')[1];
const b = document.querySelectorAll('a')[2];

a.parentElement.removeChild(a);

b.remove(); //may not be supported