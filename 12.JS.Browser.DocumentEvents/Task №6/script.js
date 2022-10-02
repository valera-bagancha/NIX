// Task №6
console.log(document.body.lastChild.nodeType);// выведет 1. Потому-что мы получаем тег <script>, а это в свою очередь является узлом-елементом  

//Task №7
let body = document.body;
body.innerHTML = "<!--" + body.tagName + "-->";
console.log(body.firstChild.data); // BODY
 //Потому что
// Заменяем содержимое <body> на комментарий. Он будет иметь вид <!--BODY-->, т.к. body.tagName == "BODY". Свойство tagName в HTML всегда находится в верхнем регистре.
// Этот комментарий теперь является первым и единственным потомком body.firstChild.
// Значение свойства data для элемента-комментария – это его содержимое (внутри <!--...-->)

//Task №8
console.log(document.constructor.name); // объект класса HTMLDocument
console.log(HTMLDocument.prototype.constructor === HTMLDocument);// true
console.log(HTMLDocument.prototype.constructor.name);// HTMLDocument
console.log(HTMLDocument.prototype.__proto__.constructor.name); // Document
console.log(HTMLDocument.prototype.__proto__.__proto__.constructor.name);  // Node
// constructor.name используется для того что бы получить имя класса в строковой форме