// Task №1
function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}

// Task №2
function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] == 'number') {
      obj[key] *= 2;
    }
  }
}

// Task №3
function readNumber() {
  let num;
  
  do {
    num = prompt("Введите число");
    if (num === null || !num.length ) {
      return null
    } 
  } while (isNaN(num) && num)
}
console.log(readNumber());


// Task №4
function random(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return rand;
}

alert( random(1, 5) );


// Task №5
function random(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

alert( random(1, 5) );