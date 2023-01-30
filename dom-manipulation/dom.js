
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

// alert function for our buttons
function alertFunction() {
    alert("YAY! YOU DID IT!");
}

const btn3 = document.querySelector("#btn3")

// method 2 of clicking button
btn3.onclick = alertFunction; 

// method 3 of clicking button
btn3.addEventListener('click', alertFunction);

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    alert(button.id);
  });
});