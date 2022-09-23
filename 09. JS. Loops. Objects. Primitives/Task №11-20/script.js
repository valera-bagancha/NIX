//Task №11
let i = 0;
while (++i < 5) alert(i); // 1-4 Потому что i сначала увеличивается на 1, затем сравнивает 
let i = 0;
while (i++ < 5) alert(i); // 1-4 Потому что Оператор i++ увеличивает i, возвращая старое значение, так что в сравнении i++ < 5 будет участвовать старое i = 0

//Task №12
for (let i = 0; i < 5; i++) alert(i);
for (let i = 0; i < 5; ++i) alert(i);
//в обоих случиях цикл дойдет до 4. Потому что сначала идет единожды присваивание i = 0 перед чем-либо (начало), затем проверяем условие и если true – выполнить тело цикла alert(i), и затем i++

//Task №13
for (let i = 2; i <= 10; i++) {
  if (i % 2 ===0) {
    console.log(i);
  }
}

//Task №14
// for (let i = 0; i < 3; i++) {
//   alert( `number ${i}!` );
//   }

let i = 0;
while (i < 3) {
  alert( `number ${i}!` );
  i++;
}

//Task №15
let a;

do {
  a = prompt("Введите число больше 100?");
} while (a <= 100 && a);

//Task №16
let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) {
  for (let j = 2; j < i; j++) { 
    if (i % j == 0) continue nextPrime;
  }
  alert(i); 
}

//Task №17
let a = +prompt("Введите первое число");
let b = +prompt("Введите второе число");
let ab = (a + b) / 2;
console.log(ab);

//Task №18
let a = +prompt("Введите число");
let aa = a**2;
console.log(aa);

//Task №19
let a = +prompt("Введите первое число");
let b = +prompt("Введите второе число");
let c = +prompt("Введите третье число");
let min = Math.min(a, b, c);
let max = Math.max(a, b, c);
let calc = max - min;
console.log(calc); 

//Task №20
let a = +prompt("Введите число");
if (a % 2 === 0) {
  console.log('парне!');
}

