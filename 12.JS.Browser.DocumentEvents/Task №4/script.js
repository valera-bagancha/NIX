const table = document.querySelector('#age-table');
const label = table.getElementsByTagName('label');
const td = table.querySelector('td');
const form = document.querySelector('form[name="search"]');
const firstInput = form.querySelector('input');
const inputs = form.querySelectorAll('input');
const lastInput = inputs[inputs.length-1]; 

console.log(table);
console.log(label);
console.log(td);
console.log(form);
console.log(firstInput);
console.log(lastInput);