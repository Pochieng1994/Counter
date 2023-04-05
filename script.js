const buttonOne = document.querySelector('#increment');
const buttonTwo = document.querySelector('#decrement');
const number = document.querySelector('h2');
let count = 0;

buttonOne.addEventListener('click', function(){
  count += 1;
  number.innerHTML = count; 
});

buttonTwo.addEventListener('click', function(){
  count -= 1;
  number.innerHTML = count;
});

