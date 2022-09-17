//Task №1
let name = 'Valera'
let admin = ''
admin = name
alert(admin)


//Task №2
const BIRTHDAY = '18.04.1982' ; 
const age = someCode( BIRTHDAY );

//Task №3
let name = "Ilya " ;
alert ( ` hello ${ 1 } ` );  // hello 1
//alert ( ` hello ${ "name " } ); // error 
alert ( ` hello ${ name } ` ); // hello Ilya


//Task №4
"" + 1 + 0 // '10'
"" - 1 + 0 // -1
true + false // 1
6 / "3" // 2
"2" * "3" // 6
4 + 5 + "px" // "9px"
"$" + 4 + 5 // "$45"
"4" - 2 // 2 
"4px" - 2 // NaN
7 / 0 // Infinity
" – 9 " + 5 // " -9  5"
" – 9 " - 5 // -14
null + 1 // 1
undefined + 1 // NaN

//Task №5
let a = 1, b = 1;
let c = ++a; // 2
let d = b++; // 1


//Task №6
let a = 2;
let x = 1 + (a *= 2 );
// a = 4
// x = 5 

//Task №7
5 > 4 // true
"ананас" > "яблуко" // false
"2" > "12" // true
undefined == null // true
undefined === null // false 
null == "\n0\n" // false 
null === +"\n0\n " // false 


//Task №8
let userName = prompt('what`s your name ?');
alert(userName)

//Task №9
if ("0") {
  alert( ' Привіт'); // виведеться
  }

//Task №10
let name = prompt("Яка «офіційна» назва JavaScript ?");
if(name == 'ECMAScript') {
  alert("Правильно!")
} else {
  alert("Не знаєте? ECMAScript!»")
}