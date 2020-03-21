const p = document.createElement('P');
p.textContent = 'A new paragragh';
p.style.fontSize = '24px';

const li = document.querySelector('li');
const a = li.firstElementChild;

//li.appendChild(p);
li.insertBefore(p, a);
