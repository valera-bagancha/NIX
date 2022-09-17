//Task №21
if (-1 || 0) alert( 'first'); // Выполнится = -1
if (-1 && 0) alert( 'second' ); // Не выполнится = 0 
if (null || -1 && 1) alert('third' ); // Выполнится = 1

//Task №22
 let userName = prompt("Кто там?");

 if (userName === 'Админ') {

  let pass = prompt('Пароль?');

  if (pass === 'Я главный') {
    alert( 'Здравствуйте!' );
  } else if (pass === '' || pass === null) {
    alert( 'Отменено' );
  } else {
    alert( 'Неверный пароль' );
  }

} else if (userName === '' || userName === null) {
  alert( 'Отменено' );
} else {
  alert( "Я вас не знаю" );
}

//Task №23
// switch (browser) {
//   case 'Edge':
//   alert(" You've got the Edge! ");
//   break;
//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//   alert( ' Okay we support these browsers too' );
//   break;
//   default:
//   alert( ' We hope that this page looks ok!' );
//   }

  if(browser == 'Edge') {
    alert("You've got the Edge!");
  } else if (browser == 'Chrome' || browser == 'Firefox' || browser == 'Safari' || browser == 'Opera') {
    alert( 'Okay we support these browsers too' );
  } else {
    alert( 'We hope that this page looks ok!' );
  }

//Task №24
// let a = +prompt( 'a?', '');
// if(a == 0) {
// alert(0);
// }
// if(a == 1) {
// alert(1);
// }
// if(a == 2 || a == 3) {
// alert('2,3');
// }

switch (а) {
  case 0:
    alert('0');
    break;

  case 1:
    alert('1');
    break;

  case 2:
  case 3:
    alert('2, 3');
    break;
}

//Task №25
let number = prompt ();
if (number > 0) {
  alert(+number + 1)
} else {
  alert(number) 
}

//Task №26
let number = prompt ();
if (number > 0) {
  alert(+number + 1)
} else {
  alert(+number + 2) 
}

//Task №27
let number = prompt ();
if (number > 0) {
  alert(+number + 1)
} else if (number < 0) {
  alert(+number + 2) 
} else {
  number = 10
  alert(number)
}

//Task №28
const arr = [-10, -6, 5],
     positiveN = []
  for (let i = 0; i < arr.length; i++) { 
  if (arr[i] >= 0 ) {
    positiveN.push(arr[i])
  } 
}
console.log(positiveN);

//Task №29
const arr = [-10, -6, 5],
     positiveN = []
     negativeN = []; 
  for (let i = 0; i < arr.length; i++) { 
  if (arr[i] >= 0 ) {
    positiveN.push(arr[i])
  } else {
    negativeN.push(arr[i])
  }
}
console.log(positiveN);
console.log(negativeN);

//Task №30
const arr = [4, 2];
if (arr[0] > arr[1]) {
  console.log(arr[0]);
} else {
  console.log(arr[1]);
}