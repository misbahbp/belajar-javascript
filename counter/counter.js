let button = document.getElementById('button');
let count = document.getElementById('count');
let c = 0;

count.innerText = `The button was clicked ${c} times!`;

button.addEventListener('click', () => {
    c++;
    count.innerText = `The button was clicked ${c} times!`;
});