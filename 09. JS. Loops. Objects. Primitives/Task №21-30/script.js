//Task №21
let a = prompt('введите число меньше 100');
let arr = a.split('');
let arrSum = 0;
for (let i = 0; i < arr.length; i++) {
 arrSum += +arr[i]
}
console.log(arrSum);
console.log(arr.length);

//Task №22
let inches = +prompt('Введите дюймы');
let centimeters = +prompt('Введите сантиметры');
let inchToCm = inches* 2.54;
let CmtoInch = centimeters/2.54;
console.log(inchToCm);
console.log(CmtoInch);

//Task №23
const firstPoint = {
  question: 'В каком году был основан харьков ?',
  answer: '1654',
};

const secondPoint = {
  question: 'Сколько будет 2+2 ?',
  answer: '4',
};

const thirdPoint = {
  question: 'В каком году умерла Єлизавета II ?',
  answer: '2022',
};

const performPoint = ({ question, answer }) => {
  const userAnswer = prompt(question);

  if (userAnswer === answer) {
    return 'Верно !';
  } 
  
  return 'Не верно :(';
} 

const message1 = performPoint(firstPoint);
alert(message1);

const message2 = performPoint(secondPoint);
alert(message2);

const message3 = performPoint(thirdPoint);
alert(message3);

//Task №24
let a;

do {
  a = prompt("Введите трехзначное число");
} while (a <= 100 || a >= 1000 && a);

if (a % 2 === 0) {
  let arr = a.split('');
  let arrSum = 0;
  for (let i = 0; i < arr.length; i++) {
  arrSum += +arr[i]
  }
  console.log(arrSum);
} else {
  let arr = a.split('');
  let calc = 1;
  for (let i = 0; i < arr.length; i++) {
  calc *= +arr[i]
  }
  console.log(calc);
}

//Task №25
let a = +prompt('Введите значение для стороны a');
let b = +prompt('Введите значение для стороны b');
let c = +prompt('Введите значение для стороны c');

let ab = a + b;
let ac = a + c;
let cb = c + b;

const isExistTriangle =  ab > c && ac > b && cb > a;
const message =  isExistTriangle ? 'triangle is exist' : "triangle doesn't exist"
console.log(message);

//Task №26
// координаты точки A 
let x = 4;
let y = 9;

// радиус круга 
let r = 10;

let xy = Math.sqrt(x ** 2 + y ** 2);
if (xy <= r) {
  console.log('Точка принадлежит кругу');
} else {
  console.log('Точка НЕ принадлежит кругу');
}

//Task №27
const user = {}
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

// Task №28
const user = {
  name: "John"
  };

user.name = "Pete"; // можно заменить 

//Task №29
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}

console.log(sum);

//Task №30
const multiplyNumeric = (obj) => {
  for(let key in obj) {
    if (typeof obj[key] === 'number') {
      obj[key] *= 2;
    }
  }
} 