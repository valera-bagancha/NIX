//Task №6
function ucFirst(str) {
  if (!str) {
    return str;
  } 

    return str[0].toUpperCase() + str.slice(1);
}

console.log(ucFirst("вася"));


//Task №7
function checkSpam(str) {
  let lower = str.toLowerCase();
  if (lower.includes('viagra') || lower.includes('xxx')) {
    return true;
  } 
   return false;
}

console.log(checkSpam('buy ViAgRA now'));
console.log(checkSpam('free xxxxx'));
console.log(checkSpam('innocent rabbit'));

//Task №8
function truncate(str, maxlength){
  if (str.length > maxlength) {
    return str.slice(0, maxlength - 1) + '…'
  } 
  return str
}

console.log(truncate( "Ось що мені хотілося б сказати на цю тему:", 20));
console.log(truncate( "Усім привіт!", 20));

Task №9
function extractCurrencyValue(str) {
  return +str.slice(1);
}

console.log(extractCurrencyValue('$120') === 120);

//Task №10
function sumInput() {
  let numbers = [];
  while (true) {
    let value = prompt("Введите число");

    if (value === "" || value === null || !isFinite(value)) break;
    numbers.push(+value);
  }

  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
}

console.log(sumInput());