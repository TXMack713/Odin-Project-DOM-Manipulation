const container = document.querySelector('#container');

const content = document.createElement('p');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const para = document.createElement('p');
para.textContent = "Hey I'm read!";
para.style.color = 'red';

const h3 = document.createElement('h3');
h3.style.color = 'blue';
h3.textContent = "I'm a blue h3!";

const div1 = document.createElement('div');
div1.style.cssText = 'background-color: pink; border: black';

const h2 = document.createElement('h2');
h2.textContent = "I'm in a div!";

const p1 = document.createElement('p');
p1.textContent = "ME TOO!";

container.appendChild(para);
container.appendChild(h3);

div1.appendChild(h2);
div1.appendChild(p1);

container.appendChild(div1);