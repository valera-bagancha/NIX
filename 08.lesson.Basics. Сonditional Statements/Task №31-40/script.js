//Task №31
const arr = [4, 9];
if (arr[0] < arr[1]) {
  console.log(arr[0]);
} else {
  console.log(arr[1]);
}

//Task №32
const arr = [4, 5];
if (arr[0] > arr[1]) {
  console.log(arr[0]);
  console.log(arr[1]);
} else {
  console.log(arr[1]);
  console.log(arr[0]);
}

//Task №33
let a = 7;
let b = 5;
if (a < b) {
  console.log(a, b);
} else {
  [a, b] = [b, a];
  console.log(a, b);
}


//Task №34
let a = 3
let b = 5
if (a !== b) {
  let c = a + b 
  b += c 
  a += c
  console.log(a, b);
} else {
  b = 0 
  a = 0
  console.log(a, b);
}

//Task №35
let a = 7
let b = 8 
if (a !== b) {
  if (a > b) {
    b = a
  } else {
    a = b 
  }
} else {
  a = 0
  b = 0
}

//Task №36
console.log(Math.min(3, 6, 9)); 

//Task №37
let a = +prompt("Введите число:"); 
let b = +prompt("Введите число:"); 
let c = +prompt("Введите число:");
if (b > a && b < c || b < a && b > c) {
  alert(b)
} else if (a > b && a < c || a < b && a > c) {
  alert(a)
} else {
  alert(c)
}

//Task №38
let a = +prompt("Введите число:"); 
let b = +prompt("Введите число:"); 
let c = +prompt("Введите число:");

console.log(Math.min(a, b, c));
console.log(Math.max(a, b, c));


//Task №39
let a = +prompt("Введите число:"); 
let b = +prompt("Введите число:"); 
let c = +prompt("Введите число:");

if (a < b && a < c) {
  console.log(b + c);
} else if (b < c) {
  console.log(a + c);
} else {
  console.log(a + b);
}

//Task №40
let a = +prompt("Введите число:"); 
let b = +prompt("Введите число:"); 
let c = +prompt("Введите число:");

if (a > b && a > c || a < b && a < c) {
  console.log(a);
} else if (b > a && b > c || b < a && b < c) {
  console.log(b);
} else {
  console.log(c);
}