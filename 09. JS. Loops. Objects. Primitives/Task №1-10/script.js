//Task №1
let i = 3;
while (i) { 
 alert(i--); 
} // ответ = 1. Каждое выполнение цикла уменьшает i на 1 выведет 1, затем уменьшит i до 0 все, проверка while(i) не даст выполняться циклу дальше.

//Task №2
let a = +prompt('Введите число');
let b = +prompt('Введите число');
let c = +prompt('Введите число');
if (a < b && b < c) {
  console.log(a**2);
  console.log(b**2);
  console.log(c**2);
} else {
  a = a* (-1);
  b = b* (-1);
  c = c* (-1);
}


//Task №3
let a = +prompt('Введите число');
let b = +prompt('Введите число');
let c = +prompt('Введите число');
if (a < b && b < c || a > b && b > c) {
  console.log(a**2);
  console.log(b**2);
  console.log(c**2);
} else {
 console.log(a* (-1));
 console.log(b* (-1));
 console.log(c* (-1));
}

//Task №4
let a = +prompt('Введите координату точки A:');
let b = +prompt('Введите координату точки B:');
let c = +prompt('Введите координату точки C:');
let ab = (a - b)**2;
let ac = (a - c)**2;
if (ab < ac) {
  console.log(`B: ${b}`);
  console.log(Math.sqrt(ab));
} else {
  console.log(`C: ${c}`);
  console.log(Math.sqrt(ac));
}

//Task №5
let x = +prompt('Введите координату точки A по оси Х:');
let y = +prompt('Введите координату точки A по оси Y:');
if (x == 0 && y == 0) {
  console.log(0);
} else if (x > 0 && y == 0) {
  console.log(1);
} else if (x == 0 && y > 0) {
  console.log(2);
} else if (x > 0 && y > 0) {
  console.log(3);
}

//Task №6
let x = +prompt('Введите координату точки A по оси Х:');
let y = +prompt('Введите координату точки A по оси Y:');
if (x > 0 && y > 0) {
  console.log(1);
} else if (x < 0 && y > 0) {
  console.log(2);
} else if (x < 0 && y < 0) {
  console.log(3);
} else if (x > 0 && y < 0){ 
  console.log(4);
}

//Task №7
A(4, 5);
B(4, 1);
C(9, 1);
D-?;
D(9, 5);

//Task №8
let year = +prompt('Введите любой год:');
if (year % 400 === 0 || year % 100 !== 0 && year % 4 === 0) {
  console.log('366 days');
} else {
  console.log('365 days');
}

//Task №9
let a = +prompt('Введите число');
if (a < 0 && a % 2 ===0) {
  console.log('негативне парне число');
} else if (a == 0) {
  console.log('нульове число');
} else if (a > 0 && a % 2 !==0) {
  console.log('позитивне непарне число');
}

//Task №10
let a = +prompt('Введите число');
if (a >= 10 && a < 100 && a % 2 ===0) {
  console.log('парне двозначне число');
} else if (a >= 100 && a % 2 !==0) {
  console.log('непарне тризначне число');
} 