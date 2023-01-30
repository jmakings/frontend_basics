
const container = document.querySelector("#container");

// paragraph creation 
const p1 = document.createElement('p');
p1.style.color = 'red';
p1.textContent = "Hey I'm red!"; 
container.appendChild(p1);

// h3 creation and addition
const h3_1 = document.createElement('h3');
h3_1.style.color = 'blue';
h3_1.textContent = "I'm a blue h3!"; 
container.appendChild(h3_1); 

// div with elements inside
const div1 = document.createElement('div'); 
div1.style.borderColor = "black"; 

const h1_1 = document.createElement('h1'); 
h1_1.textContent = "I'm in a div";
div1.appendChild(h1_1); 

const p2 = document.createElement('p');
p2.textContent = "ME TOO!"; 
div1.appendChild(p2); 

// addition of div with all elements to container
container.appendChild(div1);

const btn1 = document.querySelector("#btn1")
btn1.onclick = () => alert("Hello World");

const btn2 = document.querySelector("#btn2"); 
btn2.addEventListener('click', () => {
    alert("Hello World Again!!");
});
