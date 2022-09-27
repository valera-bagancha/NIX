// Task №11
function checkAge (age) {
  if (age > 18) {
  return true;
  } else {
  // ...
  return confirm( ' Батьки дозволили ?');
   }
  }
  //Чи буде ця функція працювати якось інакше, якщо прибрати else ? Функция будет работать также.
  function checkAge (age) {
  if (age > 18) {
  return true;
  }
  // ...
  return confirm( ' Батьки дозволили ?');
  }
  //Чи є хоч одна відмінність у поведінці цього варіанту? Отличий нет.

// Task №12
function checkAge (age) {
  if (age > 18) {
  return true;
  } else {
  return confirm( ' Батьки дозволили ?');
   }
  }

  console.log(checkAge (age));

function checkAge (age) {
  return (age > 18) ? true : confirm( ' Батьки дозволили ?')
}

console.log(checkAge (19));

function checkAge(age) {
  return (age > 18) || confirm('Родители разрешили?');
}

// Task №13
function min(a,b) {
  if (a < b) {
    return a
  }

  return b
}

console.log(min(2, 5));
console.log(min(3, -1));
console.log(min(1, 1));

// Task №14
function pow(x, n) {
  let result = x;

  for (let i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}

let x = prompt("Введите значение x");
let n = prompt("Введите степень n для x");

if (n < 1) {
  alert(`Степень ${n} не поддерживается`);
} else {
  alert(pow(x, n));
}

// Task №15
// function ask(question, yes, no) {
//   if (confirm(question)) yes()
//   else no();
//   }
//   ask (
//   "Ви згодні?",
//    function () { alert ("Ви погодилися."); },
//    function () { alert ("Ви скасували виконання."); }
//   );

  function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
    }
    ask (
    "Ви згодні?",
     () => { alert ("Ви погодилися."); },
     () => { alert ("Ви скасували виконання."); }
    );


  // Task №16
  function calc(salary, palmPrise, spend) {
    let balance = salary - spend;
    let timeInterval = palmPrise/balance;
    return Math.ceil(timeInterval)
  }

  console.log(calc(3333, 8000, 1750));

  // Task №17
  function sumNegativeNum() {

    let numbers = [];

    let i = 0;

    while (i < 10) {
      let value = +prompt("Введите число");
      i++;
      if (value < 0) {
        numbers.push(value)
      }
    }

    let sum = 0;

      for (let number of numbers) {
        sum += number;
      }
      return sum;
  }
  console.log(sumNegativeNum());

