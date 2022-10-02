//Task №1
const block = document.querySelector('div');
const list = document.querySelector('ul');
const sublist = document.querySelectorAll('li');

console.log(block);
console.log(list);
console.log(sublist[1]);

//Task №2
// Якщо elem – довільний вузол DOM-елемента.
// Правда, що elem.lastChild.nextSibling завжди дорівнює null ? Да. Элемент elem.lastChild всегда последний, у него нет ссылки nextSibling
// Правда, що elem.children[0].previousSibling завжди дорівнює null? Нет. Потому что elem.children[0] – потомок-элемент. Но перед ним могут быть другие узлы.
