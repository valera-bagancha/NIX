//Task №11
let num = prompt("Enter the number");
if (num > 0) {
  alert(1)
} else if (num < 0) {
  alert(-1)
} else {
  alert(0)
}

//Task №12
let result;
if(a + b < 4) {
result = ' Мало ';
} else {
result = 'Багато';
}

let result = (a + b < 4) ? ' Мало ' : 'Багато'

//Task №13
if (login == ' Співробітник') {
  message = ' Привіт ';
  } else if (login == 'Директор') {
  message = ' Добрий день! ';
  
  } else if (login == '') {
  message = 'Відсутній логін';
  } else {
  message

let message = (login == 'Співробітник') ? 'Привіт' :
  (login == 'Директор') ? 'Добрий день!' :
  (login == '') ? 'Відсутній логін' :
  '';
  
//Task №14
alert( null || 2 || undefined ); // 2

//Task №15
alert(alert (1) || 2 || alert(3)); //alert возвращает undefined. Bсе завершатся, результатом undefined || 2. Конечный результат будет 2

//Task №16
alert(1 && null && 2); //nul

//Task №17
alert(alert(1) && alert(2)); // alert(1)

//Task №18
alert(null || 2 && 3 || 4 ); //3

//Task №19
if (age >= 14 && age <= 90)

//Task №20
if (!(age >= 14 && age <= 90))
if (age < 14 || age > 90)