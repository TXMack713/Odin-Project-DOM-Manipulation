const container = document.querySelector('#container');
// selects the #container div

console.dir(container.firstElementChild);
// selects the first child of #container => .display

const controls = document.querySelector('.controls');
// selects the .controls div

console.dir(controls.previousElementSibling);
// selects the prior sibling => .display

const div = document.createElement('div');
// creates a new div referenced in the variable 'div'

div.style.color = 'blue'

div.style.backgroundColor = 'white';

div.setAttribute('id', 'theDiv');

console.log(div.getAttribute('id'));

div.removeAttribute('id');

div.classList.add('new');

div.classList.remove('new');

div.classList.toggle('active');

div.textContent = 'Hello, World!';

div.innerHTML = '<span>Hello, World!</span>';
// textContnet should be used rather than innerHTML, which can present a security risk if misused

